/**
 * The images class.
 */
class Images {

    /**
     * Saves setting from current row.
     */
    currentRow = {};

    /**
     * The constructor of class Images.
     *
     * @param {number} cols
     */
    constructor(cols, portraitCols, squareCols, landscapeCols) {
        this.cols = cols;
        this.portraitCols = portraitCols;
        this.squareCols = squareCols;
        this.landscapeCols = landscapeCols;
    }

    /**
     * Clears current row and start calculation next row.
     */
    clearRow() {
        this.currentRow = {
            colsWidth: 0,

            indexesAll: [],
            indexesLandscape: [],
            indexesSquare: [],
            indexesPortrait: [],

            colsAll: [],
            colsLandscape: [],
            colsSquare: [],
            colsPortrait: [],
        };
    };

    /**
     * Fix current row, because the next image is too wide.
     *
     * @param {*} currentRow
     * @param {*} landscapes
     * @param {*} cols
     */
    fixCurrentRow(colsMax) {
        let colsWidth = this.currentRow.colsWidth;

        let colsLandscape = [...this.currentRow.colsLandscape];
        let colsAll = [...this.currentRow.colsAll];

        let useLandscapes = colsLandscape.length > 0 ? true : false;
        let cols = useLandscapes ? colsLandscape : colsAll;

        let missingCols = 0;
        let addCols = 0;
        let newCols = [];

        do {
            missingCols = colsMax - colsWidth;
            addCols = Math.ceil(missingCols / cols.length);
            newCols.push(cols.shift() + addCols);
            colsWidth += addCols;
        } while (cols.length > 0);

        newCols.map((newCol, index) => {
            let imageIndex = useLandscapes ? this.currentRow.indexesLandscape[index] : this.currentRow.indexesAll[index];
            this.images[imageIndex].cols = newCol;

            return imageIndex;
        });
    }

    /**
     * Adds properties to given images array.
     *
     * @param {array} images
     */
    addPropertiesToImages = (images, defaultValue) => {
        this.images = images;

        /* starts with a cleared row :) */
        this.clearRow();

        /* rebuild all images */
        this.images.map((item, index) => {
            let addCols = item.portrait ? (item.square ? this.squareCols : this.portraitCols) : this.landscapeCols;

            // this image is too wide.
            if ((this.currentRow.colsWidth + addCols) > this.cols) {
                this.fixCurrentRow(this.cols);
                this.clearRow();
            }

            this.currentRow.colsWidth += addCols;

            this.images[index].cols = addCols;
            this.images[index] = {...defaultValue, ...this.images[index]};

            if (this.images[index].title === null) {
                this.images[index].title = this.images[index].img;
            } else {
                this.images[index].title = this.images[index].title.replace(/%i/, index + 1);
            }

            if (!item.portrait || item.square) {
                this.currentRow.indexesLandscape.push(index);
                this.currentRow.colsLandscape.push(addCols);
            }

            this.currentRow.indexesAll.push(index);
            this.currentRow.colsAll.push(addCols);

            if (this.currentRow.colsWidth === this.cols) {
                this.clearRow();
            }

            return true;
        });

        return this.images;
    }
}

export default Images;