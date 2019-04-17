# learning-grid
A basic system and API to be used for teaching programming. Consists of a 12x12 grid of giant pixels that can be turned on and off and be used to teach basic interaction.

API:
pixelOn(x,y)
x,y - positive integer

Turns the indicated pixel on coordinates x and y black. If x or y are out of bounds, nothing will happen.


initGrid()

Clears the canvas and draws a grid, making the canvas ready for drawing. Can be used to reset the canvas.