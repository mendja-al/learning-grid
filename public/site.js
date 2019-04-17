let canvas = document.getElementById("learning-canvas");
let ctx = canvas.getContext("2d");
ctx.translate(0.5, 0.5);
let pixelSize = 60;
let canvasSize = 480;
let nrPixels = canvasSize/pixelSize;

function grid() {
    ctx.strokeStyle = "#ccc";
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
grid();
function pixelOn(x,y) {
    let startX = x*pixelSize;
    let startY = y*pixelSize;
    ctx.fillStyle = "#000";
    ctx.fillRect(startX,startY,pixelSize,pixelSize);
}