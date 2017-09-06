var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    return Player;
}());
function startGame() {
    var playerName = getInputValue('playerName');
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = 'Multimath player'; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = score + "-" + playerName;
    logger("Score:" + score);
}
function logPlayer(name) {
    if (name === void 0) { name = 'Multimath player'; }
    console.log("New game starting for :" + name);
}

document.getElementById('startGame').addEventListener('click', startGame);
var logMessage = function (message) { return console.log(message); };
var logError = function (error) { return console.error(error); };
var firstPlayer = new Player();
firstPlayer.name = 'Dan';
console.log(firstPlayer.formatName());
//# sourceMappingURL=app.ts.map