// import default components
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from "prop-types";

// material ui core
import { withStyles } from "@material-ui/core/styles";
import { Drawer, AppBar, Toolbar, Typography, Divider, IconButton, List, ListItemIcon, ListItemText, ListItem, Menu,
    MenuItem, Collapse } from "@material-ui/core";

// import icons (rename to XxxIcon)
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import PhotoAlbumTwoToneIcon from '@material-ui/icons/PhotoAlbumTwoTone';
import PhotoLibraryTwoToneIcon from '@material-ui/icons/PhotoLibraryTwoTone';
import ViewModuleTwoToneIcon from '@material-ui/icons/ViewModuleTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import AddPhotoAlternateTwoToneIcon from '@material-ui/icons/AddPhotoAlternateTwoTone';
import PlaylistAddTwoToneIcon from '@material-ui/icons/PlaylistAddTwoTone';
import ExpandLessTwoToneIcon from '@material-ui/icons/ExpandLessTwoTone';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

// import own components
import DesignAtomLinkButton from '../design/atom/linkButton';
import DesignAtomListItem from '../design/atom/listItem';

const menuMain = [
    {href: '/photo', text: 'Fotos', subtext: '4 Bilder', icon: <PhotoLibraryTwoToneIcon />, buttonIcon: <AddPhotoAlternateTwoToneIcon />, buttonTo: "/photo/new"},
    {href: '/album', text: 'Foto Alben', subtext: '3 Alben', icon: <PhotoAlbumTwoToneIcon />, buttonIcon: <PlaylistAddTwoToneIcon />, buttonTo: "/album/new"}
];

const menuSecond = [
    {href: '/module', text: 'Module', icon: <ViewModuleTwoToneIcon />, submenu: [
        {href: '/module/basic', text: 'Basic', icon: <ViewModuleTwoToneIcon />},
        {href: '/module/list', text: 'Liste', icon: <ViewModuleTwoToneIcon />},
        {href: '/module/detail', text: 'Detail', icon: <ViewModuleTwoToneIcon />},
        {href: '/module/form', text: 'Form', icon: <ViewModuleTwoToneIcon />},
    ]},
    {href: '/info', text: 'Info', icon: <InfoTwoToneIcon />},
    {href: '/help', text: 'Hilfe', icon: <ImportContactsTwoToneIcon />}
];

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
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
        sidebarOpen: false,

        topMenuOpen: false,

        photoOpen: true,
        albumOpen: true,

        sidebarMenuSecondClickOpen: {},
    };

    topMenuAnchorElement = null;

    handleSidebar = (open) => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    };

    closeSidebar = () => {
        this.setState({ sidebarOpen: false });
    };

    openSidebar = () => {
        this.setState({ sidebarOpen: true });
    };

    handleAlbumClick = () => {
        this.setState({albumOpen: !this.state.albumOpen});
    };

    handleSidebarMenuSecondClick = (index) => {
        let open = this.getSidebarMenuSecondOpen(index);
        let sidebarMenuSecondClickOpen = this.state.sidebarMenuSecondClickOpen;

        sidebarMenuSecondClickOpen[index] = !open;

        this.setState({sidebarMenuSecondClickOpen: sidebarMenuSecondClickOpen});
    };

    getSidebarMenuSecondOpen = (index) => {
        return this.state.sidebarMenuSecondClickOpen.hasOwnProperty(index) && this.state.sidebarMenuSecondClickOpen[index] ? true : false;
    }

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
                        {this.state.sidebarOpen ? <MenuTwoToneIcon classes={{root: classes.menuButtonIconClose}} /> : <MenuTwoToneIcon classes={{root: classes.menuButtonIconOpen}} />}
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
                    anchor={'left'}
                    open={this.state.sidebarOpen}
                    onClose={this.handleSidebar}
                >
                    {menuMain.map((menuItem, index) => (
                        <DesignAtomListItem
                            key={'menu-main-design-atom-list-item-' + index}
                            onClose={this.closeSidebar} to={menuItem.href} text={menuItem.text}
                            buttonIcon={menuItem.buttonIcon || null}
                            buttonTo={menuItem.buttonTo || null}
                        >{menuItem.icon}</DesignAtomListItem>
                    ))}

                    <Divider />

                    {menuSecond.map((menuItem, menuSecondIndex) => (
                        <React.Fragment key={'menu-second-fragment-1-' + menuSecondIndex}>
                            {menuItem.hasOwnProperty('submenu') ?
                                <React.Fragment key={'menu-second-fragment-2-' + menuSecondIndex}>
                                    <ListItem button key={'menu-second-list-item-' + menuSecondIndex} onClick={() => this.handleSidebarMenuSecondClick(menuSecondIndex) }>
                                        <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                        <ListItemText primary={menuItem.text} />
                                        {this.getSidebarMenuSecondOpen(menuSecondIndex) ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />}
                                    </ListItem>
                                    <Collapse key={'menu-second-collapse-' + menuSecondIndex} in={this.getSidebarMenuSecondOpen(menuSecondIndex)} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {menuItem.submenu.map((submenuItem, menuItemIndex) => (
                                                <DesignAtomListItem
                                                    key={'menu-second-design-list-item-' + menuSecondIndex + '-' + menuItemIndex}
                                                    onClose={this.closeSidebar}
                                                    to={submenuItem.href}
                                                    text={submenuItem.text}
                                                    className={classes.nested}
                                                    buttonIcon={submenuItem.buttonIcon || null}
                                                    buttonTo={submenuItem.buttonTo || null}
                                                >{submenuItem.icon}</DesignAtomListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                </React.Fragment> :
                                <DesignAtomListItem
                                    key={'menu-second-design-atom-list-item-' + menuSecondIndex}
                                    onClose={this.closeSidebar}
                                    to={menuItem.href}
                                    text={menuItem.text}
                                    buttonIcon={menuItem.buttonIcon || null}
                                    buttonTo={menuItem.buttonTo || null}
                                >{menuItem.icon}</DesignAtomListItem>
                            }
                        </React.Fragment>
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
