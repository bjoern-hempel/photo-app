import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar';

import ListPhotoPage from './pages/photo/list';
import ShowPhotoPage from './pages/photo/show';
import EditPhotoPage from './pages/photo/edit';

import DB from './db';

class App extends Component {
    state = {
        db: new DB('photo-app'),
        photos: {},
        loading: true
    }

    async componentDidMount() {
        const photos = await this.state.db.getAllPhotos();

        this.setState({
            photos,
            loading: false
        });
    }

    handleSave = async (photo) => {

        let newPhoto = await this.state.db.createPhoto(photo);

        const { photos } = this.state;

        if (!('_id' in photo)) {
            photo['_id'] = newPhoto.id;
        }

        if (!('_rev' in photo)) {
            photo['_rev'] = newPhoto.rev;
        }

        this.setState({
            photos: {
                ...photos,
                [newPhoto.id]: photo
            }
        });

        return newPhoto.id;
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
                <Route exact path="/photo/edit/:id" component={(props) => <EditPhotoPage {...props} photo={this.state.photos[props.match.params.id]} onSave={this.handleSave} />}  />
                <Route exact path="/photo/new" component={(props) => <EditPhotoPage {...props} photo={undefined} onSave={this.handleSave} />} />
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
