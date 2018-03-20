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
    console.log(1);
    var blockX = 100;
    var blockY = 10;
    var blockH = 420;
    var blockW = 270;
    var horGutter = 20;
    var verticalGutter = 40;
    var fz = 16;
    var gistH = 150;
    var gistW = blockW - (horGutter * 2);

    (function printBlock() {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(blockX, blockY, blockW, blockH);
        ctx.font = fz + "px PT Mono";
        ctx.fillStyle = '#000000';
        ctx.fillText("Ура вы победили!",blockX + horGutter, blockY + verticalGutter);
        ctx.fillText("Список результатов:",blockX + horGutter, blockY + verticalGutter + fz);
    })();

    (function printGist() {
        ctx.fillStyle = '#000000';
        ctx.fillRect(blockX + 20, blockY + (verticalGutter * 2) + fz, gistW, gistH);
    })();

    window.getMaxValue(times);
};