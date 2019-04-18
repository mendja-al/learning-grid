/** Turns on a pixel in our grid.
 * @param {number} x the horizontal coordinate of the pixel, needs to be a postive integer from 0 to 7
 * @param {number} y the vertical coordinate of the pixel, needs to be a postive integer from 0 to 7
 */
declare function pixelOn(x: number, y: number): void;

/** Resets the pixel grid. */
declare function initGrid(): void;