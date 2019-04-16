let canvas = document.getElementById("learning-canvas");
let ctx = canvas.getContext("2d");
let pixelWidth = 40;

function grid() {
    ctx.strokeStyle = "#777";
    for(var i=0;i<12;i++) {
        for(var j=0;j<12;j++) {
            ctx.rect(i*pixelWidth,j*pixelWidth,pixelWidth,pixelWidth);
            ctx.stroke();
        }
    }
    ctx.strokeStyle = "#fff";
}
grid();
function pixelOn(x,y) {
    let startX = x*pixelWidth;
    let startY = y*pixelWidth;
    ctx.fillStyle = "#000";
    ctx.fillRect(startX,startY,pixelWidth,pixelWidth);
}