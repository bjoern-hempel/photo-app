import React from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '../../utils/date';

export default class AlbumList extends React.Component {

    /**
     * Renders all albums from this.props
     */
    renderAlbums() {
        const albums = Object.values(this.props.albums);
    
        return albums.map((n) =>
            <div id={'album-element-' + n._id} key={n._id}>
                <h2>
                    {n.title}<small> - { formatDate(n.createdAt) } <Link to={`/album/show/${n._id}`}>Show</Link> <Link to={`/album/edit/${n._id}`}>Edit</Link></small>
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