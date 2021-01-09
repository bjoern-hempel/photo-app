import React from 'react';
import PhotoList from '../../components/photo/list';

export default class ListPhotoPage extends React.Component {
    render() {
        const photos = Object.values(this.props.photos);

        return (
            <div>
                <h1>Photos</h1>
                <PhotoList {...this.props} photos={this.props.photos} />
            </div>
        )
    }
}