
var turn = 'X';
var score = {
    'X': 0,
    'O': 0
};
var gridValue = 0;
function fnLoad() {
    var select = document.getElementById("grid");
    for (i = 3; i <= 100; i += 1) {
        var option = document.createElement('option');
        select.options[select.options.length] = new Option(i + ' X ' + i, i);
    }

    addEvent(document.getElementById("game"), "click", fnChoose);

    fnNewGame();
}