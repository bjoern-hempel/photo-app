import React from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '../../utils/date';

/**
 * Creates a new or edit an existing album element. 
 */
export default class EditAlbumPage extends React.Component {
    newAlbum = {
        createdAt: (new Date()).toISOString(),
        updatedAt: (new Date()).toISOString(),

        title: '',
        description: '',
    }

    state = {
        album: this.props.album ? this.props.album : this.newAlbum
    }

    updateValue = (e) => {
        const { album } = this.state;

        const targetNames = e.target.name.split('.');
        const targetValue = e.target.value;

        switch (targetNames.length) {
            case 1:
                album[targetNames[0]] = targetValue;
                break;

            case 2:
                album[targetNames[0]][targetNames[1]] = targetValue;
                break;

            case 3:
                album[targetNames[0]][targetNames[1]][targetNames[2]] = targetValue;
                break;

            default:
                console.error('Unsupported number of targets');
                break;
        }

        this.setState({
            album: { ...album }
        })
    }

    handleSave = async (e) => {
        e.preventDefault();

        const id = await this.props.onSave(this.state.album);
        this.props.history.replace(`/album/show/${id}`);
    }

    /**
     * Renders the edit album page.
     */
    render() {
        const { album } = this.state;

        const title = album._id ? <h1>Edit Album <small>({album._id})</small></h1> : <h1>New Album</h1>

        return (
            <div className="album-form">
                {title}
                <form onSubmit={this.handleSave}>
                    <div>
                        <small><strong>Created at</strong>: { formatDate(album.createdAt) }</small>
                    </div>
                    <div>
                        <small><strong>Updated at</strong>: { formatDate(album.updatedAt) }</small>
                    </div>
                    <hr />
                    <div className="album-form-field">
                        <label>Title</label>
                        <input type="text" name="title" value={album.title} onChange={this.updateValue} />
                    </div>
                    <div className="album-form-field photo-form-field-text">
                        <label>Description</label>
                        <textarea name="description" value={album.description} onChange={this.updateValue} />
                    </div>
                    <hr />
                    <div className="album-form-buttons">
                        <button className="btn">Save</button>
                        <Link to="/album">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}