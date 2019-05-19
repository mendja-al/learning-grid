import {editor, getEditorValue, colorize, resetColors} from './editor';
let canvas = document.getElementById("learning-canvas");
let colors = ["#FF6EAB",'#9FCC60',"#4477FF"];
let ctx = canvas.getContext("2d");
ctx.translate(0.5, 0.5);
let canvasWidth = 1280;
let canvasHeight= 1280;
let pixelSize = 0;

let horPixels = 8;
const initPixels = 8;

window.initGrid = (hPixels) => {
    horPixels = hPixels;
    pixelSize = Math.floor(canvasWidth/horPixels);
    ctx.fillStyle = "#eee";
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
    for(var i=0;i<horPixels;i++) {
        for(var j=0;j<horPixels;j++) {
            drawGridCell(i,j);   
        }
    }
}

function randomInt(lowerLimit,upperLimit) {
    let range = upperLimit - lowerLimit + 1;
    let random = Math.random()*range;
    return Math.floor(random);
}

function drawGridCell(x,y) {
    let borderWidth = 0.02;
    let startX = x*pixelSize;
    let startY = y*pixelSize;
    ctx.fillStyle = "#fff";
    ctx.fillRect(startX,startY,pixelSize,borderWidth*pixelSize);
    ctx.fillRect(startX,startY+(pixelSize*(1-borderWidth)),pixelSize,borderWidth*pixelSize);
    ctx.fillRect(startX,startY,borderWidth*pixelSize,pixelSize);
    ctx.fillRect(startX+(pixelSize*(1-borderWidth)),startY,pixelSize*borderWidth,pixelSize);
}

initGrid(initPixels);

window.colorize = colorize;
window.resetColors = resetColors;

window.pixelOn = (x,y) => {
    let borderWidth = 0.02; //in percent of total width
    let startX = (x+borderWidth)*pixelSize;
    let startY = (y+borderWidth)*pixelSize;
    ctx.fillStyle = colors[randomInt(0,2)];
    ctx.fillRect(startX,startY,pixelSize*(1-(2*borderWidth)),pixelSize*(1-(2*borderWidth)));
}

window.runIde = () => {
  stopIde();
  scopedEval(getEditorValue());
}

window.stopIde = () => {
    horPixels = initPixels;
    resetColors();
    clearAllIntervals();
    clearAllTimeouts();
    initGrid(horPixels);
  }

window.coinFlip = (probability = 0.5) => {
    return Math.random()<probability;
}


let intervalList = [];
let timeoutList = [];

function clearAllIntervals() {
    for(var i in intervalList) {
        clearInterval(intervalList[i]);
    }
    intervalList = [];
}

function clearAllTimeouts() {
    for(var i in timeoutList) {
        clearTimeout(timeoutList[i]);
    }
    timeoutList = [];
}



function scopedEval (declarations)
{
    return (function (declarations) {
        let setInterval = (cb,timeout,args) => {
            let intervalId = window.setInterval(cb,timeout,args);
            intervalList.push(intervalId);
            return intervalId;
        }

        let setTimeout = (cb,timeout,args) => {
            let timeoutId = window.setTimeout(cb,timeout,args);
            timeoutList.push(timeoutId);
            return timeoutId;
        }
        return eval(declarations);
    })(declarations)
}

canvas.onclick = (ev) => {
    pixelOn(2,3);
}