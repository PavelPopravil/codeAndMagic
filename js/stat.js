function getMaxValue(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function createObjFromArrays(arr1, arr2) {
    var objArr = {};
    arr1.forEach(function (item, i) {
        objArr[item] = arr2[i];
    });
    return objArr;
}

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
    var gistItemW = 40;
    var gistItemGutter = 50;
    var textColor = '#000000';
    var playersObj = createObjFromArrays(names, times);

    (function printBlock() {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(blockX, blockY, blockW, blockH);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7';
        ctx.fillRect(blockX + 10, blockY + blockH, blockW, 10);
        ctx.font = fz + "px PT Mono";
        ctx.fillStyle = textColor;
        ctx.fillText("Ура вы победили!",blockX + horGutter, blockY + verticalGutter);
        ctx.fillText("Список результатов:",blockX + horGutter, blockY + verticalGutter + fz);
    })();

    for (key in playersObj) {
        if (!playersObj.hasOwnProperty(key)) {
            return false;
        }
        printNames(blockX, key);
        createGist(blockX, key);
        blockX += gistItemGutter + gistItemW;
    }

    function printNames(xPos, name) {
        ctx.fillStyle = textColor;
        ctx.fillText(name ,xPos + horGutter,blockY + verticalGutter + (fz*3));
    }

    function createGist(xPos, name) {
        ctx.fillStyle = setColor(name);
        ctx.fillRect(xPos + horGutter, blockY + verticalGutter + (fz*4), gistItemW, calcProprtion(playersObj[key]));
    }

    function setColor(name) {
        var color;
        if (name.toLowerCase() === 'вы') {
            color = 'rgba(255, 0, 0, 1)';
        } else {
            color = 'rgba(0, 0, 255,' + Math.random() + ')'; // ToDO opacity не может быть 0
        }
        return color;
    }

    function calcProprtion(time) {
        var maxTime = getMaxValue(times);
        var x = gistH * time / maxTime;
        return x;
    }

};