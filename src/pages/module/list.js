/* import react components */
import React from 'react';
import PropTypes from 'prop-types';

/* import material ui */
import { withStyles } from '@material-ui/core/styles';
import { Typography, ListSubheader, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';

/* import icons */
import InfoIcon from '@material-ui/icons/Info';

/* import some own utilities */
import Images from "../../utils/images";

/**
 * Pictures
 */
let images = [
    {img: '/images/DSC07434.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07435.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07437.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07439.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07440.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07441.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07443.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07444.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07445.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07446.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07447.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07448.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07449.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07450.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07451.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07453.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07454.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07455.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07456.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07457.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07458.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07459.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07460.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07461.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07462.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07463.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07464.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07465.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07466.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07467.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07468.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07469.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07470.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07471.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07472.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07473.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07474.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07475.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07476.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07477.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07478.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07479.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07480.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07481.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07482.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07483.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07484.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07485.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07486.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07487.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07488.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07489.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07490.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07491.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07492.JPG', imageMode: 'square'},
    {img: '/images/DSC07493.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07494.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07495.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07496.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07497.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07498.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07499.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07500.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07501.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07502.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07503.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07504.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07506.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07509.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07510.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07511.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07512.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07513.JPG', imageMode: 'square'},
    {img: '/images/DSC07514.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07515.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07516.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07519.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07520.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07521.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07522.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07523.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07524.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07525.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07526.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07528.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07529.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07530.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07531.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07532.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07533.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07534.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07535.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07536.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07537.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07538.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07539.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07540.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07541.JPG', imageMode: 'landscape'},
    {img: '/images/DSC07542.JPG', imageMode: 'portrait'},
    {img: '/images/DSC07543.JPG', imageMode: 'portrait'}
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
    imageListItem: {
        height: 100
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
    state = {
        portraitCols: 1,
        squareCols: 2,
        landscapeCols: 3,
        cols: 6,
        defaultValue: {title: null, author: 'Björn Hempel'}
    };

    /**
     *
     * @param {integer} index
     * @param {string} path
     */
    handleClickImage(index, path) {
        alert(path);
    }

    render() {
        let { classes } = this.props;
        let imagesClass = new Images(this.state.cols, this.state.portraitCols, this.state.squareCols, this.state.landscapeCols);

        /**
         * Adds all properties to image array.
         */
        images = imagesClass.addPropertiesToImages(images, this.state.defaultValue);

        return (
            <React.Fragment>
                <ImageList className={classes.root} cols={this.state.cols}>
                    <ImageListItem key="Subheader" cols={this.state.cols}>
                        <ListSubheader component="div">
                            <Typography variant="h3" gutterBottom>Jahr 1958</Typography>
                        </ListSubheader>
                    </ImageListItem>
                    {images.map((image, index) => (
                        <ImageListItem className={classes.imageListItem} key={image.img} cols={image.cols || 2} onClick={(event) => this.handleClickImage(index, image.img)}>
                            <img
                                srcSet={`${image.img} 1x,
                                    ${image.img} 2x`}
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
            </React.Fragment>
        )
    }
}

ModuleListPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(ModuleListPage);