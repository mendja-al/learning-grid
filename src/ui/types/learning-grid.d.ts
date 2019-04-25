/** Turns on a pixel in our grid.
 * @param {number} x the horizontal coordinate of the pixel, needs to be a postive integer from 0 to 7
 * @param {number} y the vertical coordinate of the pixel, needs to be a postive integer from 0 to 7
 */
declare function pixelOn(x: number, y: number): void;

/** Resets the pixel grid. 
 * @param {number} x the number of pixels in the horizontal direction
 * @param {number} y the number of pixels in the vertical direction
*/
declare function initGrid(x: number, y: number): void;

/** Colorizes a line with red color. Subsequent calls to this function will remove the coloration on the other lines.
 * @param {number} lineNr The line number that you want to color red.
 */
declare function colorize(lineNr: number): void;

/** Resets the colors on the editor. */
declare function resetColor(): void;