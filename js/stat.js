'use strict';
window.getMaxValue = function (arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

window.renderStatistics = function (ctx, names, times) {
    //block vars
    var blockX = 100;
    var blockY = 10;
    var blockH = 270;
    var blockW = 420;
    var horGutter = 20;
    var verticalGutter = 40;
    var fz = 16;
    // gist vars
    var gistH = 150;
    var gistW = blockW - (horGutter * 2);
    var gistItemW = 40;
    var gistItemGutter = 50;
    var gistItemColor = 'rgba(255, 0, 0, 1)';
    var gistItemColor2 = 'blue';
    var textColor = '#000000';

    (function printBlock() {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(blockX, blockY, blockW, blockH);
        ctx.font = fz + "px PT Mono";
        ctx.fillStyle = textColor;
        ctx.fillText("Ура вы победили!",blockX + horGutter, blockY + verticalGutter);
        ctx.fillText("Список результатов:",blockX + horGutter, blockY + verticalGutter + fz);
    })();

    for (var i = 0; i < times.length; i++) {
        var max = getMaxValue(times);
        // max = 100;
        // i = x; 

        createGist(blockX);
        blockX += gistItemGutter + gistItemW;
    }

    function createGist(xPos) {
        ctx.fillStyle = gistItemColor2;
        ctx.fillRect(xPos + horGutter, blockY + verticalGutter + (fz*2), gistItemW, gistH);
    }

    for (var j = 0; j < names.length; j++) {
        // var posX2 = blockX;
        // printNames(posX2, names[j]);
        // posX2 += gistItemGutter + gistItemW;
    }

    function printNames(xPos, name) {
        ctx.fillStyle = textColor;
        ctx.fillText(name ,xPos + horGutter, blockY + verticalGutter + (fz*2) + gistH);
    }


    // function setProprtion() {
    //
    // }

    // console.log(times);
    // console.log(getMaxValue(times));
    window.getMaxValue(times);
};