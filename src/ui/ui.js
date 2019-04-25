import {editor, getEditorValue, colorize, resetColors} from './editor';
let canvas = document.getElementById("learning-canvas");
let ctx = canvas.getContext("2d");
ctx.translate(0.5, 0.5);
let canvasWidth = 1280;
let canvasHeight= 1280;
let pixelWidth = 0;
let pixelHeight = 0;
let horPixels = 8;
let verPixels = 8;
window.initGrid = (hPixels,vPixels) => {
    horPixels = hPixels;
    verPixels = vPixels;
    pixelWidth = Math.floor(canvasWidth/horPixels);
    pixelHeight = Math.floor(canvasHeight/verPixels);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
    for(var i=0;i<horPixels;i++) {
        for(var j=0;j<verPixels;j++) {
            drawGridCell(i,j);   
        }
    }
}

function drawGridCell(x,y) {
    let borderWidth = 0.02;
    let startX = x*pixelWidth;
    let startY = y*pixelHeight;
    ctx.fillStyle = "#eee";
    ctx.fillRect(startX,startY,pixelWidth,borderWidth*pixelHeight);
    ctx.fillRect(startX,startY+(pixelHeight*(1-borderWidth)),pixelWidth,borderWidth*pixelHeight);
    ctx.fillRect(startX,startY,borderWidth*pixelWidth,pixelHeight);
    ctx.fillRect(startX+(pixelWidth*(1-borderWidth)),startY,pixelWidth*borderWidth,pixelHeight);
}

initGrid(horPixels,verPixels);

window.colorize = colorize;
window.resetColors = resetColors;

window.pixelOn = (x,y) => {
    let borderWidth = 0.10; //in percent of total width
    let startX = (x+borderWidth)*pixelWidth;
    let startY = (y+borderWidth)*pixelHeight;
    ctx.fillStyle = "#000";
    ctx.fillRect(startX,startY,pixelWidth*(1-(2*borderWidth)),pixelHeight*(1-(2*borderWidth)));
}

window.runIde = () => {
  resetColors();
  initGrid(horPixels,verPixels);
  eval(getEditorValue());
}