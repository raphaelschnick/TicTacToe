// HTML Elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');
const xScore_element = document.querySelector('.xScore');
const oScore_element = document.querySelector('.oScore');
const again = document.querySelector('.again');

// game constants
const xSymbol = 'X';
const oSymbol = 'O';

let xScore = 0;
let oScore = 0;
let switchButton = false;
// game variables
let gameIsLive = true;
let xIsNext = true;


// functions

const handleWin = (letter) => {
    gameIsLive = false;
    if (letter === 'X') {
        statusDiv.innerHTML = `${xSymbol} hat gewonnen!`;
        xScore++;
        xScore_element.innerHTML = `Player X: &nbsp;  <span>${xScore}</span>`;
        oScore_element.innerHTML = `Player O: &nbsp;  <span>${oScore}</span>`;
    } else {
        statusDiv.innerHTML = `<span>${oSymbol} hat gewonnen!</span>`;
        oScore++;
        xScore_element.innerHTML = `Player X: &nbsp;  <span>${xScore}</span>`;
        oScore_element.innerHTML = `Player O: &nbsp;  <span>${oScore}</span>`;
        
    }
};

const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const middleLeft = cellDivs[3].classList[1];
    const middleMiddle = cellDivs[4].classList[1];
    const middleRight = cellDivs[5].classList[1];
    const bottomLeft = cellDivs[6].classList[1];
    const bottomMiddle = cellDivs[7].classList[1];
    const bottomRight = cellDivs[8].classList[1];

    // check winner
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        handleWin(middleLeft);
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        handleWin(bottomLeft);
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        handleWin(topMiddle);
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
        handleWin(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        handleWin(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
        gameIsLive = false;
        statusDiv.innerHTML = 'Unentschieden!';
    } else {
        xIsNext = !xIsNext;
        if (xIsNext) {
            statusDiv.innerHTML = `Spieler: ${xSymbol}`;
        } else {
            statusDiv.innerHTML = `Spieler: <span>${oSymbol}</span>`;
        }
    }
};


// Handlers
const handleReset = () => {
    xIsNext = true;
    statusDiv.innerHTML = `Spieler: ${xSymbol}`;
    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove('X');
        cellDiv.classList.remove('O');
        cellDiv.classList.remove('won');
    }
    gameIsLive = true;
};

const handleCellClick = (e) => {
    const classList = e.target.classList;

    if (!gameIsLive || classList[1] === 'X' || classList[1] === 'O') {
        return;
    }

    if (xIsNext) {
        classList.add('X');
        checkGameStatus();
    } else {
        classList.add('O');
        checkGameStatus();
    }
};


// listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick)
}

// Dark Theme
function darkTheme() {
    document.body.classList.toggle('dark-theme');  
    document.body.classList.toggle('light-theme');
};

// Bot


function bot() {
    var bot = document.getElementById('bot');
    var title = document.getElementById('title');
    bot.classList.toggle('aus');
    bot.classList.toggle('an');
    title.classList.toggle('an');
    title.classList.toggle('aus');

    if(!switchButton) {
    bot.innerHTML = "Bot an";
    switchButton = true;
    } else { 
    bot.innerHTML = "Bot aus";
    switchButton = false;
    }
};