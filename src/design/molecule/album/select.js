import React from 'react';

import DesignAtomAlbumSelect from '../../atom/album/select';

export default class DesignMoleculeAlbumSelect extends React.Component {
    /**
     * JSX render function.
     */
    render() {
        return (
            <React.Fragment>
                <label htmlFor="albums">Album</label>
                <DesignAtomAlbumSelect {...this.props} />
            </React.Fragment>
        )
    }
}