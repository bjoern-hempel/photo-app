import React from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '../../utils/date';

export default class PhotoList extends React.Component {

    state = {}

    /**
     * Handle delete action.
     *
     * @param {*} e
     */
    handleDelete = async (e) => {
        e.preventDefault();

        // Ask user for deletion.
        if (!window.confirm('Are you sure to delete this photo?')) {
            return;
        }

        // get photo
        let photoId = e.currentTarget.dataset.id;
        let photo = this.props.photos[photoId];

        // delete photo in couchdb
        this.props.onDelete(photo);

        // return to this list
        if (this.props.history.location.pathname !== '/photo') {
            this.props.history.replace(`/photo`);
        }
    }

    /**
     * Renders all photos from this.props.
     */
    renderPhotos() {
        const photos = Object.values(this.props.photos);

        return photos.map((n) =>
            <div id={'photo-element-' + n._id} key={n._id}>
                <h2>
                    {n.title} -&nbsp;
                    <small>
                        { formatDate(n.createdAt) }
                        <Link to={`/photo/show/${n._id}`}>Show</Link> -&nbsp;
                        <Link to={`/photo/edit/${n._id}`}>Edit</Link> -&nbsp;
                        <Link to={`#`} data-id={n._id} onClick={this.handleDelete}>Delete</Link>
                    </small>
                </h2>
                <div>
                    <img src={n.paths.localDirect} width="200" />
                </div>
            </div>
        )
    }

    /**
     * JSX render function.
     */
    render() {
        return (
            <div>
                { this.renderPhotos() }
            </div>
        )
    }
}