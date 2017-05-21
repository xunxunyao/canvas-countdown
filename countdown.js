/**
 * Created by yaoxunxun on 2017/5/20.
 */
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
//每一个像素点的半径
var RADIUS = 8;
//数字上边距
var MARGIN_TOP = 60;
//第一个数字左边距
var MARGIN_LEFT = 30;

window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    render(context);

};

function render(cxt) {

    var hours = 12;
    var minutes = 34;
    var second = 56;

    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), cxt);
    //第二个数字，数组是10*7的，相当于7个网格，每一个数字之间又有一点空隙，所以是7*2+1=15
    renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt);
    //冒号
    renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
    //分
    renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), cxt);
    renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt);
    //冒号
    renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
    //秒
    renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(second / 10), cxt);
    renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(second % 10), cxt);
}

function renderDigit(x, y, num, cxt) {

    cxt.fillStyle = "rgb(0,102,153)";
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
                cxt.beginPath();
                // 我们设定一个网格系统，每个像素点位于每个格子中心，格子的长宽为2*(RADIUS+1)
                cxt.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
                    y + i * 2 * (RADIUS + 1)+(RADIUS + 1),//每个像素点圆心的位置
                    RADIUS,//半径
                    0, 2 * Math.PI);//绘制一个完整的圆
                cxt.closePath();

                cxt.fill();
            }
        }
    }

}