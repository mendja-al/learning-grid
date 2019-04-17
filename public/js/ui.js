(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var canvas = document.getElementById("learning-canvas");
var ctx = canvas.getContext("2d");
ctx.translate(0.5, 0.5);
var pixelSize = 60;
var canvasSize = 480;
var nrPixels = canvasSize / pixelSize;

function initGrid() {
  ctx.strokeStyle = "#ccc";
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvasSize, canvasSize);

  for (var i = 0; i < nrPixels; i++) {
    for (var j = 0; j < nrPixels; j++) {
      ctx.beginPath();
      ctx.moveTo(i * pixelSize, (j + 1) * pixelSize);
      ctx.lineTo((i + 1) * pixelSize, (j + 1) * pixelSize);
      ctx.lineTo((i + 1) * pixelSize, j * pixelSize);
      ctx.stroke();
    }
  }
}

initGrid();

function pixelOn(x, y) {
  var startX = x * pixelSize;
  var startY = y * pixelSize;
  ctx.fillStyle = "#000";
  ctx.fillRect(startX, startY, pixelSize, pixelSize);
}

function runIde() {
  var ide = document.getElementById("ide");
  var ideText = ide.innerText;
  eval(ideText);
}

var ide = document.getElementById("ide");
},{}]},{},[1]);
