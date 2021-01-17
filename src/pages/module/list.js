import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Typography, ListSubheader, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';

import InfoIcon from '@material-ui/icons/Info';

/**
 * Pictures
 */
const images = [
    {img: '/images/DSC07434.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},
    {img: '/images/DSC07435.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},
    {img: '/images/DSC07437.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},
    {img: '/images/DSC07439.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},

    {img: '/images/DSC07440.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},
    {img: '/images/DSC07441.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},
    {img: '/images/DSC07443.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},
    {img: '/images/DSC07444.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},

    {img: '/images/DSC07445.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},
    {img: '/images/DSC07446.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},
    {img: '/images/DSC07447.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},

    {img: '/images/DSC07448.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 6},
    {img: '/images/DSC07449.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},
    {img: '/images/DSC07450.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},
    {img: '/images/DSC07451.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},

    {img: '/images/DSC07453.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 5},
    {img: '/images/DSC07454.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},
    {img: '/images/DSC07455.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 5},

    {img: '/images/DSC07456.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 5},
    {img: '/images/DSC07457.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},
    {img: '/images/DSC07458.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 5},

    {img: '/images/DSC07459.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},
    {img: '/images/DSC07460.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},
    {img: '/images/DSC07461.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},
    {img: '/images/DSC07462.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},
    {img: '/images/DSC07463.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},

    {img: '/images/DSC07464.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},
    {img: '/images/DSC07465.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},
    {img: '/images/DSC07466.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},

    {img: '/images/DSC07467.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},
    {img: '/images/DSC07468.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},
    {img: '/images/DSC07469.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},

    {img: '/images/DSC07470.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 5},
    {img: '/images/DSC07471.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 5},
    {img: '/images/DSC07472.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},

    {img: '/images/DSC07473.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 5},
    {img: '/images/DSC07474.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 5},
    {img: '/images/DSC07475.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2},

    {img: '/images/DSC07476.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},
    {img: '/images/DSC07477.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4}
];

/**
 * Add some custom classes to theme (via Higher-order component API).
 * Access via className={classes.button}.
 *
 * @see https://material-ui.com/styles/basics/
 * @param {object} theme
 */
const useStyles = theme => ({
    root: {
        width: '100%'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)'
    },
});

/**
 * The image list.
 *
 * @see https://next.material-ui.com/components/image-list/
 * @see https://material-ui.com/components/grid-list/
 */
class ModuleListPage extends React.Component {
    handleClickImage(index, path) {

    }

    render() {
        let { classes } = this.props;

        const gridCols = 12;

        return (
            <React.Fragment>
                <div className={classes.root}>
                    <ImageList className={classes.root} cols={gridCols}>
                        <ImageListItem key="Subheader" cols={gridCols}>
                            <ListSubheader component="div">
                                <Typography variant="h3" gutterBottom>Jahr 1958</Typography>
                            </ListSubheader>
                        </ImageListItem>
                        {images.map((image, index) => (
                            <ImageListItem key={image.img} cols={image.cols || 2} onClick={(event) => this.handleClickImage(index, image.img)}>
                                <img
                                    srcSet={`${image.img}?w=248&fit=crop&auto=format 1x,
                                        ${image.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={image.title}
                                />
                                <ImageListItemBar
                                    title={image.title}
                                    subtitle={<span>by: {image.author}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${image.title}`} className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </React.Fragment>
        )
    }
}

ModuleListPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(ModuleListPage);