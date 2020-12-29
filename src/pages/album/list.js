import React from 'react';
import AlbumList from '../../components/album/list';

export default class ListAlbumPage extends React.Component {
    render() {
        const albums = Object.values(this.props.albums)

        return (
            <div>
                <h1>Albums</h1>
                <AlbumList albums={this.props.albums} />
            </div>
        )
    }
}