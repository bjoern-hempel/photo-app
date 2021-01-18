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
    {img: '/images/DSC07434.JPG', portrait: false},
    {img: '/images/DSC07435.JPG', portrait: false},
    {img: '/images/DSC07437.JPG', portrait: true},
    {img: '/images/DSC07439.JPG', portrait: true},
    {img: '/images/DSC07440.JPG', portrait: true},
    {img: '/images/DSC07441.JPG', portrait: true},
    {img: '/images/DSC07443.JPG', portrait: false},
    {img: '/images/DSC07444.JPG', portrait: false},
    {img: '/images/DSC07445.JPG', portrait: false},
    {img: '/images/DSC07446.JPG', portrait: false},
    {img: '/images/DSC07447.JPG', portrait: false},
    {img: '/images/DSC07448.JPG', portrait: false},
    {img: '/images/DSC07449.JPG', portrait: true},
    {img: '/images/DSC07450.JPG', portrait: true},
    {img: '/images/DSC07451.JPG', portrait: true},
    {img: '/images/DSC07453.JPG', portrait: false},
    {img: '/images/DSC07454.JPG', portrait: true},
    {img: '/images/DSC07455.JPG', portrait: false},
    {img: '/images/DSC07456.JPG', portrait: false},
    {img: '/images/DSC07457.JPG', portrait: true},
    {img: '/images/DSC07458.JPG', portrait: false},
    {img: '/images/DSC07459.JPG', portrait: false},
    {img: '/images/DSC07460.JPG', portrait: true},
    {img: '/images/DSC07461.JPG', portrait: true},
    {img: '/images/DSC07462.JPG', portrait: true},
    {img: '/images/DSC07463.JPG', portrait: true},
    {img: '/images/DSC07464.JPG', portrait: false},
    {img: '/images/DSC07465.JPG', portrait: false},
    {img: '/images/DSC07466.JPG', portrait: false},
    {img: '/images/DSC07467.JPG', portrait: false},
    {img: '/images/DSC07468.JPG', portrait: false},
    {img: '/images/DSC07469.JPG', portrait: false},
    {img: '/images/DSC07470.JPG', portrait: false},
    {img: '/images/DSC07471.JPG', portrait: false},
    {img: '/images/DSC07472.JPG', portrait: true},
    {img: '/images/DSC07473.JPG', portrait: false},
    {img: '/images/DSC07474.JPG', portrait: false},
    {img: '/images/DSC07475.JPG', portrait: true},
    {img: '/images/DSC07476.JPG', portrait: false},
    {img: '/images/DSC07477.JPG', portrait: false},
    {img: '/images/DSC07478.JPG', portrait: false},
    {img: '/images/DSC07479.JPG', portrait: false},
    {img: '/images/DSC07480.JPG', portrait: true},
    {img: '/images/DSC07481.JPG', portrait: false},
    {img: '/images/DSC07482.JPG', portrait: false},
    {img: '/images/DSC07483.JPG', portrait: false},
    {img: '/images/DSC07484.JPG', portrait: true},
    {img: '/images/DSC07485.JPG', portrait: false},
    {img: '/images/DSC07486.JPG', portrait: true},
    {img: '/images/DSC07487.JPG', portrait: true},
    {img: '/images/DSC07488.JPG', portrait: false},
    {img: '/images/DSC07489.JPG', portrait: false},
    {img: '/images/DSC07490.JPG', portrait: true},
    {img: '/images/DSC07491.JPG', portrait: true},
    {img: '/images/DSC07492.JPG', portrait: true, square: true},
    {img: '/images/DSC07493.JPG', portrait: true},
    {img: '/images/DSC07494.JPG', portrait: false},
    {img: '/images/DSC07495.JPG', portrait: false},
    {img: '/images/DSC07496.JPG', portrait: true},
    {img: '/images/DSC07497.JPG', portrait: true},
    {img: '/images/DSC07498.JPG', portrait: true},
    {img: '/images/DSC07499.JPG', portrait: false},
    {img: '/images/DSC07500.JPG', portrait: true},
    {img: '/images/DSC07501.JPG', portrait: false},
    {img: '/images/DSC07502.JPG', portrait: true},
    {img: '/images/DSC07503.JPG', portrait: true},
    {img: '/images/DSC07504.JPG', portrait: false},
    {img: '/images/DSC07506.JPG', portrait: false},
    {img: '/images/DSC07509.JPG', portrait: true},
    {img: '/images/DSC07510.JPG', portrait: false},
    {img: '/images/DSC07511.JPG', portrait: false},
    {img: '/images/DSC07512.JPG', portrait: true},
    {img: '/images/DSC07513.JPG', portrait: true, square: true},
    {img: '/images/DSC07514.JPG', portrait: false},
    {img: '/images/DSC07515.JPG', portrait: false},
    {img: '/images/DSC07516.JPG', portrait: true},
    {img: '/images/DSC07519.JPG', portrait: true},
    {img: '/images/DSC07520.JPG', portrait: false},
    {img: '/images/DSC07521.JPG', portrait: false},
    {img: '/images/DSC07522.JPG', portrait: false},
    {img: '/images/DSC07523.JPG', portrait: true},
    {img: '/images/DSC07524.JPG', portrait: false},
    {img: '/images/DSC07525.JPG', portrait: false},
    {img: '/images/DSC07526.JPG', portrait: false},
    {img: '/images/DSC07528.JPG', portrait: false},
    {img: '/images/DSC07529.JPG', portrait: true},
    {img: '/images/DSC07530.JPG', portrait: true},
    {img: '/images/DSC07531.JPG', portrait: false},
    {img: '/images/DSC07532.JPG', portrait: false},
    {img: '/images/DSC07533.JPG', portrait: false},
    {img: '/images/DSC07534.JPG', portrait: false},
    {img: '/images/DSC07535.JPG', portrait: true},
    {img: '/images/DSC07536.JPG', portrait: false},
    {img: '/images/DSC07537.JPG', portrait: false},
    {img: '/images/DSC07538.JPG', portrait: true},
    {img: '/images/DSC07539.JPG', portrait: false},
    {img: '/images/DSC07540.JPG', portrait: false},
    {img: '/images/DSC07541.JPG', portrait: false},
    {img: '/images/DSC07542.JPG', portrait: true},
    {img: '/images/DSC07543.JPG', portrait: true}
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