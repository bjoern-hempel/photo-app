import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar';

import ListPhotoPage from './pages/photo/list';
import ShowPhotoPage from './pages/photo/show';
import EditPhotoPage from './pages/photo/edit';

import ListAlbumPage from './pages/album/list';
import ShowAlbumPage from './pages/album/show';
import EditAlbumPage from './pages/album/edit';

import DB from './db';

class App extends Component {
    state = {
        db: {
            photo: new DB('photos'),
            album: new DB('albums')
        },
        albums: {},
        photos: {},
        loading: true
    }

    async componentDidMount() {
        const photos = await this.state.db.photo.getAll();
        const albums = await this.state.db.album.getAll();

        this.setState({
            photos,
            albums,
            loading: false
        });
    }

    handlePhotoSave = async (photo) => {
        let { id } = '_id' in photo ? await this.state.db.photo.update(photo) : await this.state.db.photo.create(photo);

        const { photos } = this.state;

        this.setState({
            photos: {
                ...photos,
                [id]: photo
            }
        });

        return id;
    }

    handleAlbumSave = async (album) => {
        let { id } = '_id' in album ? await this.state.db.album.update(album) : await this.state.db.album.create(album);

        const { albums } = this.state;

        this.setState({
            albums: {
                ...albums,
                [id]: album
            }
        });

        return id;
    }

    renderContent() {
        if (this.state.loading) {
            return <h2>Loading...</h2>
        }

        return (
            <div className="app-content">
                {/* Photos: index/list, show/detail, new  */}
                <Route exact path="/" component={(props) => <ListPhotoPage {...props} photos={this.state.photos} />} />
                <Route exact path="/photo" component={(props) => <ListPhotoPage {...props} photos={this.state.photos} />} />
                <Route exact path="/photo/list" component={(props) => <ListPhotoPage {...props} photos={this.state.photos} />} />
                <Route exact path="/photo/show/:id" component={(props) => <ShowPhotoPage {...props} photo={this.state.photos[props.match.params.id]} />}  />
                <Route exact path="/photo/edit/:id" component={(props) => <EditPhotoPage {...props} photo={this.state.photos[props.match.params.id]} onSave={this.handlePhotoSave} />}  />
                <Route exact path="/photo/new" component={(props) => <EditPhotoPage {...props} photo={undefined} onSave={this.handlePhotoSave} />} />

                {/* Albums: index/list, show/detail, new */}
                <Route exact path="/album" component={(props) => <ListAlbumPage {...props} albums={this.state.albums} />} />
                <Route exact path="/album/list" component={(props) => <ListAlbumPage {...props} albums={this.state.albums} />} />
                <Route exact path="/album/show/:id" component={(props) => <ShowAlbumPage {...props} album={this.state.albums[props.match.params.id]} />}  />
                <Route exact path="/album/edit/:id" component={(props) => <EditAlbumPage {...props} album={this.state.albums[props.match.params.id]} onSave={this.handleAlbumSave} />}  />
                <Route exact path="/album/new" component={(props) => <EditAlbumPage {...props} album={undefined} onSave={this.handleAlbumSave} />} />
            </div>
        );
    }
  
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    { this.renderContent() }
                </div>
            </BrowserRouter>
        );
    }
}
  
export default App;
