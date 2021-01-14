// import default components
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from "prop-types";
import classNames from "classnames";

// material ui core
import { withStyles } from "@material-ui/core/styles";
import { Drawer, AppBar, Toolbar, Typography, Divider, IconButton, ListItemIcon, ListItemText, ListItem, Menu, MenuItem } from "@material-ui/core";

// import icons (rename to XxxIcon)
import AccountIcon from "@material-ui/icons/AccountCircle";
import MenuIconOpen from "@material-ui/icons/MenuOpen";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

// import own components
import LinkButton from '../design/atom/linkButton';

const drawerWidth = 220;

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36
    },
    menuButtonIconClose: {
        transition: theme.transitions.create(["transform"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        transform: "rotate(0deg)"
    },
    menuButtonIconOpen: {
        transition: theme.transitions.create(["transform"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        transform: "rotate(180deg)"
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing.unit * 9 + 1
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing.unit,
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    grow: {
        flexGrow: 1
    }
});

class AppSidebar extends React.Component {
    state = {
        open: true,
        anchorEl: null
    };

    handleDrawerOpen = () => {
        this.setState({ open: !this.state.open });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    /**
     * The Appbar render method.
     */
    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        const menuMain = [
            {href: '/photo', text: 'Foto Stream', icon: <MailIcon />},
            {href: '/album', text: 'Foto Alben', icon: <MailIcon />}
        ];

        const menuSecond = [
            {href: '/module', text: 'Modulübersicht', icon: <InboxIcon />}
        ];

        return (
            <React.Fragment>
                <AppBar
                    position="fixed"
                    className={classes.appBar}
                    fooJon={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open
                    })}
                >
                    <Toolbar disableGutters={true}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.handleDrawerOpen}
                        className={classes.menuButton}
                    >
                        {this.state.open ? <MenuIconOpen classes={{root: classes.menuButtonIconClose}} /> : <MenuIconOpen classes={{root: classes.menuButtonIconOpen}} />}
                    </IconButton>

                    <Typography
                        variant="h6"
                        color="inherit"
                        className={classes.grow}
                        noWrap
                    >
                        {/* @see https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md */}
                        <Switch>
                            <Route exact path="/">Foto App - Foto Stream</Route>
                            <Route path="/photo">Foto App - Foto Stream</Route>
                            <Route path="/album">Foto App - Foto Alben</Route>
                            <Route path="/module">Foto App - Modul Übersicht</Route>
                        </Switch>
                    </Typography>
                    <div>
                        <LinkButton to="/photo/new">(+)</LinkButton>
                        <LinkButton to="/album/new">(+)</LinkButton>

                        <IconButton
                            aria-owns={open ? "menu-appbar" : undefined}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <AccountIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        </Menu>
                    </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open
                    })}
                    classes={{
                    paper: classNames({
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open
                    })
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar} />

                    {menuMain.map((link, index) => (
                        <ListItem button key={link.text} component="a" href={link.href}>
                            <ListItemIcon>{link.icon}</ListItemIcon>
                            <ListItemText primary={link.text} />
                        </ListItem>
                    ))}

                    <Divider />

                    {menuSecond.map((link, index) => (
                        <ListItem button key={link.text} component="a" href={link.href}>
                            <ListItemIcon>{link.icon}</ListItemIcon>
                            <ListItemText primary={link.text} />
                        </ListItem>
                    ))}
                </Drawer>
            </React.Fragment>
        );
    }
}

AppSidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AppSidebar);
