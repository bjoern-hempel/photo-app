import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import LinkButton from '../design/atom/linkButton';

const navbarStyles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Navbar extends React.Component {

    /**
     * The Navbar render method.
     */
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                {/* @see https://stackoverflow.com/questions/51713706/menu-icon-in-app-bar */}
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>

                            <Typography variant="h6" color="inherit" className={classes.flex}>
                                {/* @see https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md */}
                                <Switch>
                                    <Route exact path="/">Photo Stream</Route>
                                    <Route path="/photo">Photo Stream</Route>
                                    <Route path="/album">Album</Route>
                                    <Route path="/module">Module Overview</Route>
                                </Switch>
                            </Typography>

                            <LinkButton to="/photo">Photo Stream</LinkButton>
                            <LinkButton to="/photo/new">(+)</LinkButton>
                            <LinkButton to="/album">Album</LinkButton>
                            <LinkButton to="/album/new">(+)</LinkButton>
                            <LinkButton to="/module">Module</LinkButton>
                        </Toolbar>
                    </AppBar>
                </div>
            </React.Fragment>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(navbarStyles)(Navbar);