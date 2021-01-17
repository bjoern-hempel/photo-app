/* React components */
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from "prop-types";

/* Material ui components */
import { ThemeProvider, withStyles, createMuiTheme, adaptV4Theme } from '@material-ui/core/styles';
import { StylesProvider, CssBaseline } from '@material-ui/core';

/* Own CSS design definitions */
import './App.css';

/* Some own libraries */
import DB from './db';

/* Sidebar */
import AppSidebar from './components/appSidebar';

/* Photos pages */
import PhotoListPage from './pages/photo/list';
import PhotoShowPage from './pages/photo/show';
import PhotoEditPage from './pages/photo/edit';

/* Album pages */
import AlbumListPage from './pages/album/list';
import AlbumShowPage from './pages/album/show';
import AlbumEditPage from './pages/album/edit';

/* Module pages */
import ModuleBasicPage from './pages/module/basic';
import ModuleListPage from './pages/module/list';
import ModuleDetailPage from './pages/module/detail';
import ModuleFormPage from './pages/module/form';

/* Info pages */
import InfoPage from './pages/info/index';

/* Help pages */
import HelpPage from './pages/help/index';

/**
 * Create default mui theme.
 *
 * @see https://material.io/design/color/the-color-system.html
 */
const theme = createMuiTheme(adaptV4Theme({
    palette: {
        primary: {
            light: '#4dabf5',
            main: '#2196f3',
            dark: '#1769aa',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#ffcf33',
            main: '#ffc400',
            dark: '#b28900',
            contrastText: '#000',
        },
    },
}));

/**
 * Define some styles
 *
 * @param {*} theme
 */
const useStyles = theme => ({
    root: {
        display: "flex"
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing(1),
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
});

/**
 * React Component
 *
 * @see https://reactjs.org/docs/react-component.html
 */
class App extends Component {
    state = {
        dbLocal: new DB('photoapp'),
        dbRemote: new DB('http://admin:admin@127.0.0.1:5984/photo-app'),
        albums: {},
        photos: {},
        album_to_photo: {},
        photo_to_album: {},
        loading: true,
        title: 'Photo App - Home',
        open: false,
        anchorEl: null
    };

    /**
     * Title changer function.
     *
     * @param {string} newTitle
     */
    changeTitle = (newTitle) => {
        this.setState({
            title: newTitle
        })
     }

    /**
     * Exectute if app is started.
     */
    async componentDidMount() {
        // start manual sync
        this.syncDb();

        // start automatic sync
        this.syncDb(true);
    }

    /**
     * Rebuild state from given db.
     *
     * @param {*} db
     */
    async setStateFromGivenDB(db) {
        // set photos
        const photos = await db.getAllByView('photo', 'by_createdAt', true);
        photos.forEach(photo => this.setPhoto(photo));

        // set albums
        const albums = await db.getAllByView('album', 'by_createdAt', true);
        albums.forEach(album => this.setAlbum(album));

        // set photo to album (n:n)
        this.rebuildAlbumToPhotoIndex();

        // mark as loaded
        this.setState({
            loading: false
        });
    }

    /**
     * Set the given photo to state.
     *
     * @param {*} photo
     */
    setPhoto(photo) {
        // set photo to state
        this.setState({
            photos: {
                ...this.state.photos,
                [photo._id]: photo
            }
        });

        // set photo_to_album
        this.setState({
            photo_to_album: {
                ...this.state.photo_to_album,
                [photo._id]: photo.albums
            }
        });
    }

    /**
     * Set the given album to state
     *
     * @param {*} album
     */
    setAlbum(album) {
        this.setState({
            albums: {
                ...this.state.albums,
                [album._id]: album
            }
        });
    }

    /**
     * Rebuild album_to_photo from all photos.
     */
    rebuildAlbumToPhotoIndex() {
        let album_to_photo = {};

        Object.keys(this.state.photos).forEach(photoId => {
            let photo = this.state.photos[photoId];

            photo.albums.forEach(albumId => {
                if (albumId in album_to_photo) {
                    album_to_photo[albumId].push(photoId);
                } else {
                    album_to_photo[albumId] = [photoId];
                }
            });
        });

        this.setState({album_to_photo: album_to_photo});
    }

    /**
     * Set given documents to its type.
     *
     * @param {*} docs
     */
    addDocumentsToState(docs) {
        let album_to_photo = false;

        docs.forEach(doc => {
            switch(doc.$doctype) {
                case 'photo':
                    this.setPhoto(doc);
                    album_to_photo = true;
                    break;

                case 'album':
                    this.setAlbum(doc);
                    album_to_photo = true;
                    break;

                default:
                    throw "Unknown doc with doctype \"%s\"".replace(/%s/, doc.$doctype);
            }
        });

        // set n:n for album to photo (album_to_photo)
        if (album_to_photo) {
            this.rebuildAlbumToPhotoIndex();
        }
    }

    /**
     * Sync local couch db to remote couch db (and vice versa).
     *
     * syncDb(false): start manual sync
     * syncDb(true):  start automatic sync (live mode)
     *
     * events:
     * -------
     * change:   change (info) - This event fires when a change has been found. info will contain details about
     *           the change, such as whether it was deleted and what the new _rev is. info.doc will contain the
     *           doc if you set include_docs to true. See below for an example response.
     * complete: complete (info) - This event fires when all changes have been read. In live changes, only
     *           cancelling the changes should trigger this event. info.results will contain the list of
     *           changes. See below for an example.
     * error:    error (err) - This event is fired when the changes feed is stopped due to an unrecoverable
     *           failure.
     *
     * @see https://pouchdb.com/api.html#changes
     *
     * @param {boolean} live
     */
    syncDb = (live) => {
        let self = this;

        // Start live sync: local <=> remote
        this.state.dbLocal.db.sync(this.state.dbRemote.db, {
            live: live ? true : false
        }).on('change', function (update) {
            if (update.direction === 'pull') {
                let docs = update.change.docs;
                self.addDocumentsToState(docs);
            }
            console.info('Local and remote dbs are now in sync (change).');
        }).on('complete', function () {
            self.setStateFromGivenDB(self.state.dbLocal);
            console.info('Local and remote dbs are now in sync (complete).');
        }).on('error', function (err) {
            console.info(err);
            console.info('An error occured while try to sync the local and the remote db.');
        });
    }

    /**
     * A shortcut for syncDb(false).
     */
    syncDbManual = () => {
        this.syncDb(false);
    }

    /**
     * A shortcut for syncDb(true).
     */
    syncDbLive = () => {
        this.syncDb(true);
    }

    /**
     * Photo save handler.
     *
     * @param {object} photo
     */
    handlePhotoSave = async (photo) => {
        let { id } = '_id' in photo ? await this.state.dbLocal.update(photo) : await this.state.dbLocal.create(photo, 'photo');

        const { photos } = this.state;

        this.setState({
            photos: {
                ...photos,
                [id]: photo
            }
        });

        return id;
    }

    /**
     * Photo delete handler.
     *
     * @param {object} photo
     */
    handlePhotoDelete = async (photo) => {
        let res = await this.state.dbLocal.delete(photo);

        // An error occured while trying to remove the given doc.
        if (res.ok !== true) {
            return false;
        }

        let id = res.id;
        //let rev = res.rev;

        const photos = this.state.photos;
        delete photos[id];
        this.setState({ ...photos });

        return id;
    }

    /**
     * Album save handler.
     *
     * @param {object} album
     */
    handleAlbumSave = async (album) => {
        let { id } = '_id' in album ? await this.state.dbLocal.update(album) : await this.state.dbLocal.create(album, 'album');

        const { albums } = this.state;

        this.setState({
            albums: {
                ...albums,
                [id]: album
            }
        });

        return id;
    }

    /**
     * Album delete handler.
     *
     * @param {object} album
     */
    handleAlbumDelete = async (album) => {
        let res = await this.state.dbLocal.delete(album);

        // An error occured while trying to remove the given doc.
        if (res.ok !== true) {
            return false;
        }

        let id = res.id;
        //let rev = res.rev;

        const albums = this.state.albums;
        delete albums[id];
        this.setState({ ...albums });

        return id;
    }

    /**
     * Content renderer.
     */
    renderContent() {
        if (this.state.loading) {
            return <h2>Loading...</h2>
        }

        let appProps = this.props;

        return (
            <div className="app-content">

                {/* Photos: index/list, show/detail, new  */}
                <Route exact path="/" component={(props) => <PhotoListPage {...props} photos={this.state.photos} onDelete={this.handlePhotoDelete} />} />
                <Route exact path="/photo" component={(props) => <PhotoListPage {...props} photos={this.state.photos} onDelete={this.handlePhotoDelete} />} />
                <Route exact path="/photo/list" component={(props) => <PhotoListPage {...props} photos={this.state.photos} onDelete={this.handlePhotoDelete} />} />
                <Route exact path="/photo/show/:id" component={(props) => <PhotoShowPage {...props} photo={this.state.photos[props.match.params.id]} />}  />
                <Route exact path="/photo/edit/:id" component={(props) => <PhotoEditPage {...props} photo={this.state.photos[props.match.params.id]} albums={this.state.albums} onSave={this.handlePhotoSave} />}  />
                <Route exact path="/photo/new" component={(props) => <PhotoEditPage {...props} photo={undefined} albums={this.state.albums} onSave={this.handlePhotoSave} />} />

                {/* Albums: index/list, show/detail, new */}
                <Route exact path="/album" component={(props) => <AlbumListPage {...props} albums={this.state.albums} onDelete={this.handleAlbumDelete} />} />
                <Route exact path="/album/list" component={(props) => <AlbumListPage {...props} albums={this.state.albums} onDelete={this.handleAlbumDelete} />} />
                <Route exact path="/album/show/:id" component={(props) => <AlbumShowPage {...props} album={this.state.albums[props.match.params.id]} />}  />
                <Route exact path="/album/edit/:id" component={(props) => <AlbumEditPage {...props} album={this.state.albums[props.match.params.id]} onSave={this.handleAlbumSave} />}  />
                <Route exact path="/album/new" component={(props) => <AlbumEditPage {...props} album={undefined} onSave={this.handleAlbumSave} />} />

                {/* Module */}
                <Route exact path="/module/basic" component={(props) => <ModuleBasicPage {...props} />} />
                <Route exact path="/module/list" component={(props) => <ModuleListPage {...props} />} />
                <Route exact path="/module/detail" component={(props) => <ModuleDetailPage {...props} />} />
                <Route exact path="/module/form" component={(props) => <ModuleFormPage {...props} />} />

                {/* Info */}
                <Route exact path="/info" component={(props) => <InfoPage {...props} />} />

                {/* Help */}
                <Route exact path="/help" component={(props) => <HelpPage {...props} />} />
            </div>
        );
    }

    render() {
        const { classes } = this.props;

        return (
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <div className={classes.root}>
                            {/* A collection of HTML element and attribute style-normalizations */}
                            <CssBaseline />

                            {/* The appbar of this app. */}
                            <AppSidebar />

                            {/* Render the content */}
                            <main className={classes.content}>
                                <div className={classes.toolbar} />
                                { this.renderContent() }
                            </main>
                        </div>
                    </BrowserRouter>
                </ThemeProvider>
            </StylesProvider>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(useStyles, { withTheme: true })(App);
