import React from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '../../utils/date';

export default class AlbumList extends React.Component {

    state = {}

    /**
     * Handle delete action.
     *
     * @param {*} e
     */
    handleDelete = async (e) => {
        e.preventDefault();

        // Ask user for deletion.
        if (!window.confirm('Are you sure to delete this album?')) {
            return;
        }

        // get album
        let albumId = e.currentTarget.dataset.id;
        let album = this.props.albums[albumId];

        // delete photo in couchdb
        this.props.onDelete(album);

        console.log(this.props.history);

        // return to this list
        if (this.props.history.location.pathname !== '/album') {
            this.props.history.replace(`/album`);
        }
    }

    /**
     * Renders all albums from this.props
     */
    renderAlbums() {
        const albums = Object.values(this.props.albums);

        return albums.map((n) =>
            <div id={'album-element-' + n._id} key={n._id}>
                <h2>
                    {n.title} -&nbsp;
                    <small>
                        { formatDate(n.createdAt) }
                        <Link to={`/album/show/${n._id}`}>Show</Link> -&nbsp;
                        <Link to={`/album/edit/${n._id}`}>Edit</Link> -&nbsp;
                        <Link to={`#`} data-id={n._id} onClick={this.handleDelete}>Delete</Link>
                    </small>
                </h2>
            </div>
        )
    }

    /**
     * JSX render function.
     */
    render() {
        return (
            <div>
                { this.renderAlbums() }
            </div>
        )
    }
}