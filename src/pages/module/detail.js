import React from 'react';

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

/**
 * Add some custom classes to theme (via Higher-order component API).
 * Access via className={classes.button}.
 *
 * @see https://material-ui.com/styles/basics/
 * @param {object} theme
 */
const useStyles = theme => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
});

class ModuleDetailPage extends React.Component {
    render() {
        let { classes } = this.props;

        return (
            <div>
                <Button variant="contained" color="primary" className={classes.root}>
                    Hello World
                </Button>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        )
    }
}

ModuleDetailPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(ModuleDetailPage);