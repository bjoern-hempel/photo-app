// import default components
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from "prop-types";
import classNames from "classnames";

// material ui core
import { withStyles } from "@material-ui/core/styles";
import { Drawer, AppBar, Toolbar, Typography, Divider, IconButton, List, ListItemIcon, ListItemText, ListItem, Menu,
    MenuItem, Collapse } from "@material-ui/core";

// import icons (rename to XxxIcon)
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import MenuOpenTwoToneIcon from '@material-ui/icons/MenuOpenTwoTone';
import PhotoAlbumTwoToneIcon from '@material-ui/icons/PhotoAlbumTwoTone';
import PhotoLibraryTwoToneIcon from '@material-ui/icons/PhotoLibraryTwoTone';
import ViewModuleTwoToneIcon from '@material-ui/icons/ViewModuleTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import AddPhotoAlternateTwoToneIcon from '@material-ui/icons/AddPhotoAlternateTwoTone';
import PlaylistAddTwoToneIcon from '@material-ui/icons/PlaylistAddTwoTone';
import ExpandLessTwoToneIcon from '@material-ui/icons/ExpandLessTwoTone';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';

// import own components
import LinkButton from '../design/atom/linkButton';

const drawerWidth = 220;

const menuMain = [
    {submenu: [
        {href: '/photo', text: 'Foto Stream', subtext: '4 Bilder', icon: <PhotoLibraryTwoToneIcon />},
        {href: '/photo/ignored', text: 'Foto Stream', subtext: '4 Bilder', icon: <PhotoLibraryTwoToneIcon />},
        {href: '/photo/new', text: 'Foto Stream', subtext: '4 Bilder', icon: <PhotoLibraryTwoToneIcon />},
    ], href: '/photo', text: 'Foto Stream', subtext: '4 Bilder', icon: <PhotoLibraryTwoToneIcon />},
    {href: '/album', text: 'Foto Alben', subtext: '3 Alben', icon: <PhotoAlbumTwoToneIcon />}
];

const menuSecond = [
    {href: '/module', text: 'Modulübersicht', icon: <ViewModuleTwoToneIcon />},
    {href: '/info', text: 'Info', icon: <InfoTwoToneIcon />},
    {href: '/help', text: 'Hilfe', icon: <ImportContactsTwoToneIcon />}
];

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
    sidebarOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    sidebarClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing(1),
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    grow: {
        flexGrow: 1
    },
    nested: {
        paddingLeft: theme.spacing(4),
    }
});

class AppSidebar extends React.Component {
    state = {
        sidebarOpen: true,

        topMenuOpen: false,

        photoOpen: true,
        albumOpen: true
    };

    topMenuAnchorElement = null;

    handleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    };

    handleAlbumClick = () => {
        this.setState({albumOpen: !this.state.albumOpen});
    };

    openAppbarMenu = (event) => {
        this.topMenuAnchorElement = event.currentTarget;
        this.setState({ topMenuOpen: true });
    };

    closeAppbarMenu = () => {
        this.topMenuAnchorElement = null;
        this.setState({ topMenuOpen: false });
    };

    /**
     * The Appbar render method.
     */
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <AppBar
                    position="fixed"
                    className={classes.appBar}
                >
                    <Toolbar disableGutters={true}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.handleSidebar}
                        className={classes.menuButton}
                    >
                        {this.state.sidebarOpen ? <MenuOpenTwoToneIcon classes={{root: classes.menuButtonIconClose}} /> : <MenuOpenTwoToneIcon classes={{root: classes.menuButtonIconOpen}} />}
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
                        <LinkButton to="/photo/new"><AddPhotoAlternateTwoToneIcon /></LinkButton>
                        <LinkButton to="/album/new"><PlaylistAddTwoToneIcon /></LinkButton>

                        <IconButton
                            onClick={this.openAppbarMenu}
                            color="inherit"
                        >
                            <AccountCircleTwoToneIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={this.topMenuAnchorElement}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={this.state.topMenuOpen}
                            onClose={this.closeAppbarMenu}
                        >
                            <MenuItem onClick={this.closeAppbarMenu}>Profil</MenuItem>
                            <MenuItem onClick={this.closeAppbarMenu}>Mein Konto</MenuItem>
                        </Menu>
                    </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.sidebarOpen]: this.state.sidebarOpen,
                        [classes.sidebarClose]: !this.state.sidebarOpen
                    })}
                    classes={{
                        paper: classNames({
                            [classes.sidebarOpen]: this.state.sidebarOpen,
                            [classes.sidebarClose]: !this.state.sidebarOpen
                        })
                    }}
                    open={this.state.sidebarOpen}
                >
                    <div className={classes.toolbar} />

                    {menuMain.map((link, index) => (
                        <ListItem button key={link.text} component="a" href={link.href}>
                            <ListItemIcon>{link.icon}</ListItemIcon>
                            <ListItemText primary={link.text} secondary={link.subtext} />
                        </ListItem>
                    ))}

                    <Divider />

                    {menuSecond.map((link, index) => (
                        <ListItem button key={link.text} component="a" href={link.href}>
                            <ListItemIcon>{link.icon}</ListItemIcon>
                            <ListItemText primary={link.text} />
                        </ListItem>
                    ))}

                    <Divider />

                    <ListItem button onClick={this.handleAlbumClick}>
                        <ListItemIcon><InfoTwoToneIcon /></ListItemIcon>
                        <ListItemText primary="Test" />
                        {this.state.albumOpen ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />}
                    </ListItem>
                    <Collapse in={this.state.albumOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon><InfoTwoToneIcon /></ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
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
