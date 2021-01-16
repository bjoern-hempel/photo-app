import React from 'react';

import { Link } from 'react-router-dom';

import { formatDate } from '../../utils/date';

export default class PhotoShowPage extends React.Component {
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
                <div><Link to="/">Back</Link>, <Link to={`/photo/edit/${photo._id}`}>Edit</Link></div>
                <div><small><strong>Updated At</strong>: { formatDate(photo.updatedAt) }</small></div>
                <div><small><strong>Created At</strong>: { formatDate(photo.createdAt) }</small></div>
                <div><small><strong>ID</strong>: { photo._id }</small></div>
                <h1>{ photo.title }</h1>
                <div>{ photo.description }</div>
                <div><img src={photo.paths.localDirect} width="750" /></div>
            </div>
        );
    }
}