/* import react components */
import React from 'react';
import PropTypes from 'prop-types';

/* import material ui */
import { withStyles } from '@material-ui/core/styles';
import { Typography, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';

/* import icons */
import InfoIcon from '@material-ui/icons/Info';

/* import some own utilities */
import Images from "../../utils/images";

/**
 * Pictures
 */
let images = [
    {imgOriginal1x: '/images/original/DSC07434.JPG', imgOriginal2x: '/images/original/DSC07434.JPG', imgThumbnail1x: '/images/x300/DSC07434.JPG', imgThumbnail2x: '/images/x600/DSC07434.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07435.JPG', imgOriginal2x: '/images/original/DSC07435.JPG', imgThumbnail1x: '/images/x300/DSC07435.JPG', imgThumbnail2x: '/images/x600/DSC07435.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07437.JPG', imgOriginal2x: '/images/original/DSC07437.JPG', imgThumbnail1x: '/images/x300/DSC07437.JPG', imgThumbnail2x: '/images/x600/DSC07437.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07439.JPG', imgOriginal2x: '/images/original/DSC07439.JPG', imgThumbnail1x: '/images/x300/DSC07439.JPG', imgThumbnail2x: '/images/x600/DSC07439.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07440.JPG', imgOriginal2x: '/images/original/DSC07440.JPG', imgThumbnail1x: '/images/x300/DSC07440.JPG', imgThumbnail2x: '/images/x600/DSC07440.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07441.JPG', imgOriginal2x: '/images/original/DSC07441.JPG', imgThumbnail1x: '/images/x300/DSC07441.JPG', imgThumbnail2x: '/images/x600/DSC07441.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07443.JPG', imgOriginal2x: '/images/original/DSC07443.JPG', imgThumbnail1x: '/images/x300/DSC07443.JPG', imgThumbnail2x: '/images/x600/DSC07443.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07444.JPG', imgOriginal2x: '/images/original/DSC07444.JPG', imgThumbnail1x: '/images/x300/DSC07444.JPG', imgThumbnail2x: '/images/x600/DSC07444.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07445.JPG', imgOriginal2x: '/images/original/DSC07445.JPG', imgThumbnail1x: '/images/x300/DSC07445.JPG', imgThumbnail2x: '/images/x600/DSC07445.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07446.JPG', imgOriginal2x: '/images/original/DSC07446.JPG', imgThumbnail1x: '/images/x300/DSC07446.JPG', imgThumbnail2x: '/images/x600/DSC07446.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07447.JPG', imgOriginal2x: '/images/original/DSC07447.JPG', imgThumbnail1x: '/images/x300/DSC07447.JPG', imgThumbnail2x: '/images/x600/DSC07447.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07448.JPG', imgOriginal2x: '/images/original/DSC07448.JPG', imgThumbnail1x: '/images/x300/DSC07448.JPG', imgThumbnail2x: '/images/x600/DSC07448.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07449.JPG', imgOriginal2x: '/images/original/DSC07449.JPG', imgThumbnail1x: '/images/x300/DSC07449.JPG', imgThumbnail2x: '/images/x600/DSC07449.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07450.JPG', imgOriginal2x: '/images/original/DSC07450.JPG', imgThumbnail1x: '/images/x300/DSC07450.JPG', imgThumbnail2x: '/images/x600/DSC07450.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07451.JPG', imgOriginal2x: '/images/original/DSC07451.JPG', imgThumbnail1x: '/images/x300/DSC07451.JPG', imgThumbnail2x: '/images/x600/DSC07451.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07453.JPG', imgOriginal2x: '/images/original/DSC07453.JPG', imgThumbnail1x: '/images/x300/DSC07453.JPG', imgThumbnail2x: '/images/x600/DSC07453.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07454.JPG', imgOriginal2x: '/images/original/DSC07454.JPG', imgThumbnail1x: '/images/x300/DSC07454.JPG', imgThumbnail2x: '/images/x600/DSC07454.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07455.JPG', imgOriginal2x: '/images/original/DSC07455.JPG', imgThumbnail1x: '/images/x300/DSC07455.JPG', imgThumbnail2x: '/images/x600/DSC07455.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07456.JPG', imgOriginal2x: '/images/original/DSC07456.JPG', imgThumbnail1x: '/images/x300/DSC07456.JPG', imgThumbnail2x: '/images/x600/DSC07456.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07457.JPG', imgOriginal2x: '/images/original/DSC07457.JPG', imgThumbnail1x: '/images/x300/DSC07457.JPG', imgThumbnail2x: '/images/x600/DSC07457.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07458.JPG', imgOriginal2x: '/images/original/DSC07458.JPG', imgThumbnail1x: '/images/x300/DSC07458.JPG', imgThumbnail2x: '/images/x600/DSC07458.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07459.JPG', imgOriginal2x: '/images/original/DSC07459.JPG', imgThumbnail1x: '/images/x300/DSC07459.JPG', imgThumbnail2x: '/images/x600/DSC07459.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07460.JPG', imgOriginal2x: '/images/original/DSC07460.JPG', imgThumbnail1x: '/images/x300/DSC07460.JPG', imgThumbnail2x: '/images/x600/DSC07460.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07461.JPG', imgOriginal2x: '/images/original/DSC07461.JPG', imgThumbnail1x: '/images/x300/DSC07461.JPG', imgThumbnail2x: '/images/x600/DSC07461.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07462.JPG', imgOriginal2x: '/images/original/DSC07462.JPG', imgThumbnail1x: '/images/x300/DSC07462.JPG', imgThumbnail2x: '/images/x600/DSC07462.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07463.JPG', imgOriginal2x: '/images/original/DSC07463.JPG', imgThumbnail1x: '/images/x300/DSC07463.JPG', imgThumbnail2x: '/images/x600/DSC07463.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07464.JPG', imgOriginal2x: '/images/original/DSC07464.JPG', imgThumbnail1x: '/images/x300/DSC07464.JPG', imgThumbnail2x: '/images/x600/DSC07464.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07465.JPG', imgOriginal2x: '/images/original/DSC07465.JPG', imgThumbnail1x: '/images/x300/DSC07465.JPG', imgThumbnail2x: '/images/x600/DSC07465.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07466.JPG', imgOriginal2x: '/images/original/DSC07466.JPG', imgThumbnail1x: '/images/x300/DSC07466.JPG', imgThumbnail2x: '/images/x600/DSC07466.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07467.JPG', imgOriginal2x: '/images/original/DSC07467.JPG', imgThumbnail1x: '/images/x300/DSC07467.JPG', imgThumbnail2x: '/images/x600/DSC07467.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07468.JPG', imgOriginal2x: '/images/original/DSC07468.JPG', imgThumbnail1x: '/images/x300/DSC07468.JPG', imgThumbnail2x: '/images/x600/DSC07468.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07469.JPG', imgOriginal2x: '/images/original/DSC07469.JPG', imgThumbnail1x: '/images/x300/DSC07469.JPG', imgThumbnail2x: '/images/x600/DSC07469.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07470.JPG', imgOriginal2x: '/images/original/DSC07470.JPG', imgThumbnail1x: '/images/x300/DSC07470.JPG', imgThumbnail2x: '/images/x600/DSC07470.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07471.JPG', imgOriginal2x: '/images/original/DSC07471.JPG', imgThumbnail1x: '/images/x300/DSC07471.JPG', imgThumbnail2x: '/images/x600/DSC07471.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07472.JPG', imgOriginal2x: '/images/original/DSC07472.JPG', imgThumbnail1x: '/images/x300/DSC07472.JPG', imgThumbnail2x: '/images/x600/DSC07472.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07473.JPG', imgOriginal2x: '/images/original/DSC07473.JPG', imgThumbnail1x: '/images/x300/DSC07473.JPG', imgThumbnail2x: '/images/x600/DSC07473.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07474.JPG', imgOriginal2x: '/images/original/DSC07474.JPG', imgThumbnail1x: '/images/x300/DSC07474.JPG', imgThumbnail2x: '/images/x600/DSC07474.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07475.JPG', imgOriginal2x: '/images/original/DSC07475.JPG', imgThumbnail1x: '/images/x300/DSC07475.JPG', imgThumbnail2x: '/images/x600/DSC07475.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07476.JPG', imgOriginal2x: '/images/original/DSC07476.JPG', imgThumbnail1x: '/images/x300/DSC07476.JPG', imgThumbnail2x: '/images/x600/DSC07476.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07477.JPG', imgOriginal2x: '/images/original/DSC07477.JPG', imgThumbnail1x: '/images/x300/DSC07477.JPG', imgThumbnail2x: '/images/x600/DSC07477.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07478.JPG', imgOriginal2x: '/images/original/DSC07478.JPG', imgThumbnail1x: '/images/x300/DSC07478.JPG', imgThumbnail2x: '/images/x600/DSC07478.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07479.JPG', imgOriginal2x: '/images/original/DSC07479.JPG', imgThumbnail1x: '/images/x300/DSC07479.JPG', imgThumbnail2x: '/images/x600/DSC07479.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07480.JPG', imgOriginal2x: '/images/original/DSC07480.JPG', imgThumbnail1x: '/images/x300/DSC07480.JPG', imgThumbnail2x: '/images/x600/DSC07480.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07481.JPG', imgOriginal2x: '/images/original/DSC07481.JPG', imgThumbnail1x: '/images/x300/DSC07481.JPG', imgThumbnail2x: '/images/x600/DSC07481.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07482.JPG', imgOriginal2x: '/images/original/DSC07482.JPG', imgThumbnail1x: '/images/x300/DSC07482.JPG', imgThumbnail2x: '/images/x600/DSC07482.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07483.JPG', imgOriginal2x: '/images/original/DSC07483.JPG', imgThumbnail1x: '/images/x300/DSC07483.JPG', imgThumbnail2x: '/images/x600/DSC07483.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07484.JPG', imgOriginal2x: '/images/original/DSC07484.JPG', imgThumbnail1x: '/images/x300/DSC07484.JPG', imgThumbnail2x: '/images/x600/DSC07484.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07485.JPG', imgOriginal2x: '/images/original/DSC07485.JPG', imgThumbnail1x: '/images/x300/DSC07485.JPG', imgThumbnail2x: '/images/x600/DSC07485.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07486.JPG', imgOriginal2x: '/images/original/DSC07486.JPG', imgThumbnail1x: '/images/x300/DSC07486.JPG', imgThumbnail2x: '/images/x600/DSC07486.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07487.JPG', imgOriginal2x: '/images/original/DSC07487.JPG', imgThumbnail1x: '/images/x300/DSC07487.JPG', imgThumbnail2x: '/images/x600/DSC07487.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07488.JPG', imgOriginal2x: '/images/original/DSC07488.JPG', imgThumbnail1x: '/images/x300/DSC07488.JPG', imgThumbnail2x: '/images/x600/DSC07488.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07489.JPG', imgOriginal2x: '/images/original/DSC07489.JPG', imgThumbnail1x: '/images/x300/DSC07489.JPG', imgThumbnail2x: '/images/x600/DSC07489.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07490.JPG', imgOriginal2x: '/images/original/DSC07490.JPG', imgThumbnail1x: '/images/x300/DSC07490.JPG', imgThumbnail2x: '/images/x600/DSC07490.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07491.JPG', imgOriginal2x: '/images/original/DSC07491.JPG', imgThumbnail1x: '/images/x300/DSC07491.JPG', imgThumbnail2x: '/images/x600/DSC07491.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07492.JPG', imgOriginal2x: '/images/original/DSC07492.JPG', imgThumbnail1x: '/images/x300/DSC07492.JPG', imgThumbnail2x: '/images/x600/DSC07492.JPG',  imageMode: 'square'},
    {imgOriginal1x: '/images/original/DSC07493.JPG', imgOriginal2x: '/images/original/DSC07493.JPG', imgThumbnail1x: '/images/x300/DSC07493.JPG', imgThumbnail2x: '/images/x600/DSC07493.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07494.JPG', imgOriginal2x: '/images/original/DSC07494.JPG', imgThumbnail1x: '/images/x300/DSC07494.JPG', imgThumbnail2x: '/images/x600/DSC07494.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07495.JPG', imgOriginal2x: '/images/original/DSC07495.JPG', imgThumbnail1x: '/images/x300/DSC07495.JPG', imgThumbnail2x: '/images/x600/DSC07495.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07496.JPG', imgOriginal2x: '/images/original/DSC07496.JPG', imgThumbnail1x: '/images/x300/DSC07496.JPG', imgThumbnail2x: '/images/x600/DSC07496.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07497.JPG', imgOriginal2x: '/images/original/DSC07497.JPG', imgThumbnail1x: '/images/x300/DSC07497.JPG', imgThumbnail2x: '/images/x600/DSC07497.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07498.JPG', imgOriginal2x: '/images/original/DSC07498.JPG', imgThumbnail1x: '/images/x300/DSC07498.JPG', imgThumbnail2x: '/images/x600/DSC07498.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07499.JPG', imgOriginal2x: '/images/original/DSC07499.JPG', imgThumbnail1x: '/images/x300/DSC07499.JPG', imgThumbnail2x: '/images/x600/DSC07499.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07500.JPG', imgOriginal2x: '/images/original/DSC07500.JPG', imgThumbnail1x: '/images/x300/DSC07500.JPG', imgThumbnail2x: '/images/x600/DSC07500.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07501.JPG', imgOriginal2x: '/images/original/DSC07501.JPG', imgThumbnail1x: '/images/x300/DSC07501.JPG', imgThumbnail2x: '/images/x600/DSC07501.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07502.JPG', imgOriginal2x: '/images/original/DSC07502.JPG', imgThumbnail1x: '/images/x300/DSC07502.JPG', imgThumbnail2x: '/images/x600/DSC07502.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07503.JPG', imgOriginal2x: '/images/original/DSC07503.JPG', imgThumbnail1x: '/images/x300/DSC07503.JPG', imgThumbnail2x: '/images/x600/DSC07503.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07504.JPG', imgOriginal2x: '/images/original/DSC07504.JPG', imgThumbnail1x: '/images/x300/DSC07504.JPG', imgThumbnail2x: '/images/x600/DSC07504.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07506.JPG', imgOriginal2x: '/images/original/DSC07506.JPG', imgThumbnail1x: '/images/x300/DSC07506.JPG', imgThumbnail2x: '/images/x600/DSC07506.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07509.JPG', imgOriginal2x: '/images/original/DSC07509.JPG', imgThumbnail1x: '/images/x300/DSC07509.JPG', imgThumbnail2x: '/images/x600/DSC07509.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07510.JPG', imgOriginal2x: '/images/original/DSC07510.JPG', imgThumbnail1x: '/images/x300/DSC07510.JPG', imgThumbnail2x: '/images/x600/DSC07510.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07511.JPG', imgOriginal2x: '/images/original/DSC07511.JPG', imgThumbnail1x: '/images/x300/DSC07511.JPG', imgThumbnail2x: '/images/x600/DSC07511.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07512.JPG', imgOriginal2x: '/images/original/DSC07512.JPG', imgThumbnail1x: '/images/x300/DSC07512.JPG', imgThumbnail2x: '/images/x600/DSC07512.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07513.JPG', imgOriginal2x: '/images/original/DSC07513.JPG', imgThumbnail1x: '/images/x300/DSC07513.JPG', imgThumbnail2x: '/images/x600/DSC07513.JPG',  imageMode: 'square'},
    {imgOriginal1x: '/images/original/DSC07514.JPG', imgOriginal2x: '/images/original/DSC07514.JPG', imgThumbnail1x: '/images/x300/DSC07514.JPG', imgThumbnail2x: '/images/x600/DSC07514.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07515.JPG', imgOriginal2x: '/images/original/DSC07515.JPG', imgThumbnail1x: '/images/x300/DSC07515.JPG', imgThumbnail2x: '/images/x600/DSC07515.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07516.JPG', imgOriginal2x: '/images/original/DSC07516.JPG', imgThumbnail1x: '/images/x300/DSC07516.JPG', imgThumbnail2x: '/images/x600/DSC07516.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07519.JPG', imgOriginal2x: '/images/original/DSC07519.JPG', imgThumbnail1x: '/images/x300/DSC07519.JPG', imgThumbnail2x: '/images/x600/DSC07519.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07520.JPG', imgOriginal2x: '/images/original/DSC07520.JPG', imgThumbnail1x: '/images/x300/DSC07520.JPG', imgThumbnail2x: '/images/x600/DSC07520.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07521.JPG', imgOriginal2x: '/images/original/DSC07521.JPG', imgThumbnail1x: '/images/x300/DSC07521.JPG', imgThumbnail2x: '/images/x600/DSC07521.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07522.JPG', imgOriginal2x: '/images/original/DSC07522.JPG', imgThumbnail1x: '/images/x300/DSC07522.JPG', imgThumbnail2x: '/images/x600/DSC07522.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07523.JPG', imgOriginal2x: '/images/original/DSC07523.JPG', imgThumbnail1x: '/images/x300/DSC07523.JPG', imgThumbnail2x: '/images/x600/DSC07523.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07524.JPG', imgOriginal2x: '/images/original/DSC07524.JPG', imgThumbnail1x: '/images/x300/DSC07524.JPG', imgThumbnail2x: '/images/x600/DSC07524.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07525.JPG', imgOriginal2x: '/images/original/DSC07525.JPG', imgThumbnail1x: '/images/x300/DSC07525.JPG', imgThumbnail2x: '/images/x600/DSC07525.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07526.JPG', imgOriginal2x: '/images/original/DSC07526.JPG', imgThumbnail1x: '/images/x300/DSC07526.JPG', imgThumbnail2x: '/images/x600/DSC07526.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07528.JPG', imgOriginal2x: '/images/original/DSC07528.JPG', imgThumbnail1x: '/images/x300/DSC07528.JPG', imgThumbnail2x: '/images/x600/DSC07528.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07529.JPG', imgOriginal2x: '/images/original/DSC07529.JPG', imgThumbnail1x: '/images/x300/DSC07529.JPG', imgThumbnail2x: '/images/x600/DSC07529.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07530.JPG', imgOriginal2x: '/images/original/DSC07530.JPG', imgThumbnail1x: '/images/x300/DSC07530.JPG', imgThumbnail2x: '/images/x600/DSC07530.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07531.JPG', imgOriginal2x: '/images/original/DSC07531.JPG', imgThumbnail1x: '/images/x300/DSC07531.JPG', imgThumbnail2x: '/images/x600/DSC07531.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07532.JPG', imgOriginal2x: '/images/original/DSC07532.JPG', imgThumbnail1x: '/images/x300/DSC07532.JPG', imgThumbnail2x: '/images/x600/DSC07532.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07533.JPG', imgOriginal2x: '/images/original/DSC07533.JPG', imgThumbnail1x: '/images/x300/DSC07533.JPG', imgThumbnail2x: '/images/x600/DSC07533.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07534.JPG', imgOriginal2x: '/images/original/DSC07534.JPG', imgThumbnail1x: '/images/x300/DSC07534.JPG', imgThumbnail2x: '/images/x600/DSC07534.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07535.JPG', imgOriginal2x: '/images/original/DSC07535.JPG', imgThumbnail1x: '/images/x300/DSC07535.JPG', imgThumbnail2x: '/images/x600/DSC07535.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07536.JPG', imgOriginal2x: '/images/original/DSC07536.JPG', imgThumbnail1x: '/images/x300/DSC07536.JPG', imgThumbnail2x: '/images/x600/DSC07536.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07537.JPG', imgOriginal2x: '/images/original/DSC07537.JPG', imgThumbnail1x: '/images/x300/DSC07537.JPG', imgThumbnail2x: '/images/x600/DSC07537.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07538.JPG', imgOriginal2x: '/images/original/DSC07538.JPG', imgThumbnail1x: '/images/x300/DSC07538.JPG', imgThumbnail2x: '/images/x600/DSC07538.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07539.JPG', imgOriginal2x: '/images/original/DSC07539.JPG', imgThumbnail1x: '/images/x300/DSC07539.JPG', imgThumbnail2x: '/images/x600/DSC07539.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07540.JPG', imgOriginal2x: '/images/original/DSC07540.JPG', imgThumbnail1x: '/images/x300/DSC07540.JPG', imgThumbnail2x: '/images/x600/DSC07540.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07541.JPG', imgOriginal2x: '/images/original/DSC07541.JPG', imgThumbnail1x: '/images/x300/DSC07541.JPG', imgThumbnail2x: '/images/x600/DSC07541.JPG',  imageMode: 'landscape'},
    {imgOriginal1x: '/images/original/DSC07542.JPG', imgOriginal2x: '/images/original/DSC07542.JPG', imgThumbnail1x: '/images/x300/DSC07542.JPG', imgThumbnail2x: '/images/x600/DSC07542.JPG',  imageMode: 'portrait'},
    {imgOriginal1x: '/images/original/DSC07543.JPG', imgOriginal2x: '/images/original/DSC07543.JPG', imgThumbnail1x: '/images/x300/DSC07543.JPG', imgThumbnail2x: '/images/x600/DSC07543.JPG',  imageMode: 'portrait'}
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
        width: this.getWidth(),
        height: this.getHeight(),
        portraitCols: this.getPortraitCols(this.getCols()),
        squareCols: this.getSquareCols(this.getCols()),
        landscapeCols: this.getLandscapeCols(this.getCols()),
        cols: this.getCols(),
        heightRow: 300,
        defaultValue: {title: null, author: 'Björn Hempel'}
    };

    /**
     * get cols of current width.
     */
    getCols() {
        let cols = Math.floor(Math.ceil(this.getWidth() / 100) / 2) * 2;

        return cols > 0 ? cols : 1;
    }

    /**
     * Get cols of portrait images.
     */
    getPortraitCols(colsAll) {
        let cols = 2;
        colsAll = colsAll ? colsAll : this.state.cols;

        return colsAll < cols ?colsAll : cols;
    }

    /**
     * Get cols of squared images.
     */
    getSquareCols(colsAll) {
        let cols = 3;
        colsAll = colsAll ? colsAll : this.state.cols;

        return colsAll < cols ?colsAll : cols;
    }

    /**
     * Get cols of landsape images.
     */
    getLandscapeCols(colsAll) {
        let cols = 4;
        colsAll = colsAll ? colsAll : this.state.cols;

        return colsAll < cols ?colsAll : cols;
    }

    /**
     * Get width of content area.
     */
    getWidth() {
        return document.getElementsByTagName('main')[0].offsetWidth
    }

    /**
     * Get heigth of content area.
     */
    getHeight() {
        return document.getElementsByTagName('main')[0].offsetHeight
    }

    /**
     * Update dimension function.
     */
    updateDimensions = () => {
        let cols = this.getCols();

        this.setState({
            width: this.getWidth(),
            height: this.getHeight(),
            portraitCols: this.getPortraitCols(cols),
            squareCols: this.getSquareCols(cols),
            landscapeCols: this.getLandscapeCols(cols),
            cols: cols
        });
    };

    /**
     * window.addEventListener
     */
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    /**
     * window.removeEventListener
     */
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

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
                <Typography variant="h3" gutterBottom>Jahr 1958 ({this.state.width} x {this.state.height})</Typography>
                <ImageList rowHeight={this.state.heightRow} className={classes.root} cols={this.state.cols}>
                    {images.map((image, index) => (
                        <ImageListItem className={classes.imageListItem} key={image.imgOriginal1x} cols={image.cols || 2} onClick={(event) => this.handleClickImage(index, image.img)}>
                            <img
                                srcSet={`${image.imgThumbnail1x} 1x,
                                    ${image.imgThumbnail2x} 2x`}
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