import React from 'react';

import { formatDate } from '../../utils/date';

export default class ShowAlbumPage extends React.Component {
    state = {
        album: this.props.album
    }

    /**
     * Renders the show album page.
     */
    render() {
        const { album } = this.state;

        return (
            <div>
                <div><small><strong>Updated At</strong>: { formatDate(album.updatedAt) }</small></div>
                <div><small><strong>Created At</strong>: { formatDate(album.createdAt) }</small></div>
                <div><small><strong>ID</strong>: { album._id }</small></div>
                <h1>{ album.title }</h1>
                <div>{ album.body }</div>
            </div>
        );
    }
}