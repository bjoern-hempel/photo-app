import React from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '../../utils/date';

export default class PhotoList extends React.Component {

    /**
     * Renders all photos from this.props
     */
    renderPhotos() {
        const photos = Object.values(this.props.photos);
    
        return photos.map((n) =>
            <div id={'photo-element-' + n._id} key={n._id}>
                <h2>
                    {n.title}<small> - { formatDate(n.createdAt) } <Link to={`/photo/show/${n._id}`}>Show</Link> <Link to={`/photo/edit/${n._id}`}>Edit</Link></small>
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