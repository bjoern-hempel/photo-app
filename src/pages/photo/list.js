import React from 'react';
import PhotoList from '../../components/photo/list';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

/**
 * Add some custom classes to theme (via Higher-order component API).
 * Access via className={classes.button}.
 *
 * @see https://material-ui.com/styles/basics/
 * @param {object} theme
 */
const useStyles = theme => ({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});

class PhotoListPage extends React.Component {
    render() {
        const photos = Object.values(this.props.photos);
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography variant="h3" gutterBottom>Fotoübersicht</Typography>
                <PhotoList {...this.props} photos={this.props.photos} />
            </div>
        )
    }
}

PhotoListPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(PhotoListPage);