import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Typography, Grid, Box } from '@material-ui/core';

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
        maxWidth: 750,
    },
});

class ModuleBasicPage extends React.Component {
    render() {
        let { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.root}>
                    <Typography variant="h1" gutterBottom>h1. Heading</Typography>
                    <Typography variant="h2" gutterBottom>h2. Heading</Typography>
                    <Typography variant="h3" gutterBottom>h3. Heading</Typography>
                    <Typography variant="h4" gutterBottom>h4. Heading</Typography>
                    <Typography variant="h5" gutterBottom>h5. Heading</Typography>
                    <Typography variant="h6" gutterBottom>h6. Heading</Typography>

                    <Typography variant="subtitle1" gutterBottom>
                        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>

                    <Typography variant="subtitle2" gutterBottom>
                        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography>

                    <Typography variant="body2" gutterBottom>
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography>

                    <Typography variant="button" display="block" gutterBottom>
                        button text
                    </Typography>

                    <Typography variant="caption" display="block" gutterBottom>
                        caption text
                    </Typography>

                    <Typography variant="overline" display="block" gutterBottom>
                        overline text
                    </Typography>
                </div>
                <Grid container>
                    <Box
                        boxShadow={0}
                        bgcolor="background.paper"
                        m={1}
                        p={1}
                        style={{ width: '8rem', height: '5rem' }}
                    >
                        boxShadow={0}
                    </Box>
                    <Box
                        boxShadow={1}
                        bgcolor="background.paper"
                        m={1}
                        p={1}
                        style={{ width: '8rem', height: '5rem' }}
                    >
                        boxShadow={1}
                    </Box>
                    <Box
                        boxShadow={2}
                        bgcolor="background.paper"
                        m={1}
                        p={1}
                        style={{ width: '8rem', height: '5rem' }}
                    >
                        boxShadow={2}
                    </Box>
                    <Box
                        boxShadow={3}
                        bgcolor="background.paper"
                        m={1}
                        p={1}
                        style={{ width: '8rem', height: '5rem' }}
                    >
                        boxShadow={3}
                    </Box>
                </Grid>
            </React.Fragment>
        )
    }
}

ModuleBasicPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(ModuleBasicPage);