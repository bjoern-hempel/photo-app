import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Typography, GridList, GridListTile, GridListTileBar, ListSubheader, IconButton } from '@material-ui/core';

import InfoIcon from '@material-ui/icons/Info';

/**
 * Add some custom classes to theme (via Higher-order component API).
 * Access via className={classes.button}.
 *
 * @see https://material-ui.com/styles/basics/
 * @param {object} theme
 */
const useStyles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    gridList: {
        width: '100%'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

/**
 * The image list.
 *
 * @see https://next.material-ui.com/components/image-list/
 * @see https://material-ui.com/components/grid-list/
 */
class ModuleListPage extends React.Component {
    render() {
        let { classes } = this.props;

        const gridCols = 12;
        const cellHeight = 300;

        const tileData = [
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

            {img: '/images/DSC07456.JPG', title: 'Test', author: 'Björn Hempel', portrait: false, cols: 4},
            {img: '/images/DSC07457.JPG', title: 'Test', author: 'Björn Hempel', portrait: true, cols: 2}
        ];

        return (
            <React.Fragment>
                <div className={classes.root}>
                    <GridList cellHeight={cellHeight} className={classes.gridList} cols={gridCols}>
                        <GridListTile key="Subheader" cols={gridCols} style={{ height: 'auto' }}>
                            <ListSubheader component="div">
                                <Typography variant="h3" gutterBottom>Jahr 1958</Typography>
                            </ListSubheader>
                        </GridListTile>
                        {tileData.map((tile) => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>by: {tile.author}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                        <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </React.Fragment>
        )
    }
}

ModuleListPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(ModuleListPage);