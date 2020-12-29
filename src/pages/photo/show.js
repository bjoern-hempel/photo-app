import React from 'react';

import { formatDate } from '../../utils/date';

export default class ShowPhotoPage extends React.Component {
    state = {
        photo: this.props.photo
    }

    /**
     * Renders the show photo page.
     */
    render() {
        const { photo } = this.state;

        return (
            <div>
                <div><small><strong>Updated At</strong>: { formatDate(photo.updatedAt) }</small></div>
                <div><small><strong>Created At</strong>: { formatDate(photo.createdAt) }</small></div>
                <div><small><strong>ID</strong>: { photo._id }</small></div>
                <h1>{ photo.title }</h1>
                <div>{ photo.body }</div>
                <div><img src={photo.paths.localDirect} width="750" /></div>
            </div>
        );
    }
}