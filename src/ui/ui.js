import {editor, getEditorValue, colorize} from './editor';
let canvas = document.getElementById("learning-canvas");
let ctx = canvas.getContext("2d");
ctx.translate(0.5, 0.5);
let pixelSize = 60;
let canvasSize = 480;
let nrPixels = canvasSize/pixelSize;

window.initGrid = () => {
    ctx.strokeStyle = "#ccc";
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0,canvasSize,canvasSize);
    for(var i=0;i<nrPixels;i++) {
        for(var j=0;j<nrPixels;j++) {
            ctx.beginPath();
            ctx.moveTo(i*pixelSize,(j+1)*pixelSize);
            ctx.lineTo((i+1)*pixelSize,(j+1)*pixelSize);
            ctx.lineTo((i+1)*pixelSize,j*pixelSize);
            ctx.stroke();
        }
    }
}

initGrid();

window.colorize = colorize;

window.pixelOn = (x,y) => {
    let startX = x*pixelSize;
    let startY = y*pixelSize;
    ctx.fillStyle = "#000";
    ctx.fillRect(startX,startY,pixelSize,pixelSize);
}

window.runIde = () => {
  colorize(0);
  initGrid();
  eval(getEditorValue());
}