import React from 'react';

import { formatDate } from '../../../utils/date';

export default class DesignAtomAlbumSelect extends React.Component {

    /**
     * Renders all albums from this.props
     */
    renderOptions() {
        const albums = Object.values(this.props.albums);
    
        return albums.map((n) =>
            <option id={'album-element-' + n._id} key={n._id} value={n._id}>
                {n.title} - { formatDate(n.createdAt) }
            </option>
        )
    }
    
    /**
     * JSX render function.
     */
    render() {
        return (
            <select name="albums" id="albums" defaultValue={this.props.photo.albums} onChange={this.props.onChange} multiple>
                { this.renderOptions() }
            </select>
        )
    }
}