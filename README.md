# learning-grid
A basic system and API to be used for teaching programming. Consists of a 12x12 grid of giant pixels that can be turned on and off and be used to teach basic interaction.

# Usage

This project uses webpack to bundle the front-end resources. After installing the necessary packages by using `npm install`, use the `npm run dev` or `npm run prod` commands to run webpack and create the front-end bundle. Use the `npm run watch` command to watch for changes in the front-end files, in which case a new bundle will be created after every change.

# API:

## pixelOn(x,y)
x,y - positive integer

Turns the indicated pixel on coordinates x and y black. If x or y are out of bounds, nothing will happen.

## initGrid()

Clears the canvas and draws a grid, making the canvas ready for drawing. Can be used to reset the canvas.