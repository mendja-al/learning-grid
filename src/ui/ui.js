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
    ctx.strokeStyle = "#ccc";
    ctx.fillStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
    for(var i=0;i<horPixels;i++) {
        for(var j=0;j<verPixels;j++) {
            ctx.beginPath();
            ctx.moveTo(i*pixelWidth,(j+1)*pixelHeight);
            ctx.lineTo((i+1)*pixelWidth,(j+1)*pixelHeight);
            ctx.lineTo((i+1)*pixelWidth,j*pixelHeight);
            ctx.stroke();
        }
    }
}

initGrid(horPixels,verPixels);

window.colorize = colorize;
window.resetColors = resetColors;

window.pixelOn = (x,y) => {
    let startX = x*pixelWidth;
    let startY = y*pixelHeight;
    ctx.fillStyle = "#000";
    ctx.fillRect(startX,startY,pixelWidth,pixelHeight);
}

window.runIde = () => {
  resetColors();
  initGrid(horPixels,verPixels);
  eval(getEditorValue());
}