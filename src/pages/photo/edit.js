import React from 'react';
import { Link } from 'react-router-dom';

import DesignMoleculeAlbumSelect from '../../design/molecule/album/select';

import { formatDate } from '../../utils/date';

/**
 * Creates a new or edit an existing photo element. 
 */
export default class EditPhotoPage extends React.Component {
    newPhoto = {
        createdAt: (new Date()).toISOString(),
        updatedAt: (new Date()).toISOString(),
        
        paths: {
            localDirect: '/images/DSC07434.JPG',
            localPhotoApp: '/photo-app/images/DSC07434.JPG',
            remote: 'remote://images/DSC07434.JPG'
        },

        albums: [],

        title: '',
        description: '',
    }

    state = {
        photo: this.props.photo ? this.props.photo : this.newPhoto
    }

    getValue = (e) => {
        const targetTagName = e.target.tagName;

        switch (targetTagName) {
            case 'SELECT':
                return Array.from(e.target.selectedOptions, option => option.value);

            default:
                return e.target.value;
        }
    }

    handleChange = (e) => {
        const { photo } = this.state;

        const targetNames = e.target.name.split('.');
        const targetValue = this.getValue(e);

        switch (targetNames.length) {
            case 1:
                photo[targetNames[0]] = targetValue;
                break;

            case 2:
                photo[targetNames[0]][targetNames[1]] = targetValue;
                break;

            case 3:
                photo[targetNames[0]][targetNames[1]][targetNames[2]] = targetValue;
                break;

            default:
                console.error('Unsupported number of targets');
                break;
        }

        if (targetValue === 'localDirect') {
            photo['paths']['localPhotoApp'] = '/photo-app%s'.replace(/%s/, photo['paths']['localDirect']);
            photo['paths']['remote'] = 'remote:/%s'.replace(/%s/, photo['paths']['localDirect']);
        }

        this.setState({
            photo: { ...photo }
        });
    }

    handleSave = async (e) => {
        e.preventDefault();

        const id = await this.props.onSave(this.state.photo);
        this.props.history.replace(`/photo/show/${id}`);
    }

    /**
     * Renders the edit photo page.
     */
    render() {
        const { photo } = this.state;

        const title = photo._id ? <h1>Edit Photo <small>({photo._id})</small></h1> : <h1>New Photo</h1>

        return (
            <div className="photo-form">
                {title}
                <form onSubmit={this.handleSave}>
                    <div>
                        <small><strong>Created at</strong>: { formatDate(photo.createdAt) }</small>
                    </div>
                    <div>
                        <small><strong>Updated at</strong>: { formatDate(photo.updatedAt) }</small>
                    </div>
                    <hr />
                    <div className="photo-form-field">
                        <label>Path</label>
                        <input type="text" name="paths.localDirect" value={photo.paths.localDirect} onChange={this.handleChange} />
                    </div>
                    <hr />
                    <div className="photo-form-field">
                        <DesignMoleculeAlbumSelect {...this.props} onChange={this.handleChange} />
                    </div>
                    <hr />
                    <div className="photo-form-field">
                        <label>Title</label>
                        <input type="text" name="title" value={photo.title} onChange={this.handleChange} />
                    </div>
                    <div className="photo-form-field photo-form-field-text">
                        <label>Description</label>
                        <textarea name="description" value={photo.description} onChange={this.handleChange} />
                    </div>
                    <hr />
                    <div className="photo-form-buttons">
                        <button className="btn">Save</button>
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}