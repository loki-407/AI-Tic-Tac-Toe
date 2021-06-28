import Game from "./Game.js";
import GameView from "./GameView.js";
import AI from "./AI.js";

let game = new Game();
let gameView = new GameView();



let aI = new AI();
// aI.findBestMove(game,'O');

//staring game
gameView.updateBoard(game);


// Adding event listener on restart button 
document.querySelector(".restart").addEventListener("click", () => {
    onRestartClick();
});

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}


// Adding event listener on AI
document.querySelector(".ai").addEventListener("click", () => {

    let ai = document.querySelector(".ai");

    if (ai.classList.contains("computer")) {
        game = new Game();
        ai.classList.remove("computer");
        gameView.updateBoard(game);
    }
    else {
        game = new Game();
        ai.classList.add("computer");
        gameView.updateBoard(game);
    }
});


// Adding event listener on tiles
let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {

        onTileClick(tile.dataset.index);

    });
});

function onTileClick(i) {
    let ai = document.querySelector(".ai");

    if (ai.classList.contains("computer")) {
        // AI is playing

        const bool = game.makeMove(i);
        gameView.updateBoard(game);

        if (bool) {
            let aiMove = aI.findBestMove(game, game.turn);
            game.makeMove(aiMove);
            gameView.updateBoard(game);
        }
    }
    else {
        game.makeMove(i);
        gameView.updateBoard(game);
    }
}

//dark-mode
document.querySelector(".dark-mode").addEventListener("click", () => {
    console.log("dark dark");

    let body = document.querySelector("body");
    let game = document.querySelector(".game");
    // console.log(wrapper);
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        game.classList.remove("dark");
    }
    else {
        body.classList.add("dark");
        game.classList.add("dark");
    }
});

// console.log("hello");


// game.makeMove(0);
// gameView.updateBoard(game);

// // game.makeMove(aI.findBestMove(game,'O'));
// // gameView.updateBoard(game);


// game.makeMove(1);
// gameView.updateBoard(game);




// game.makeMove(8);
// gameView.updateBoard(game);


// // game.makeMove(aI.findBestMove(game,'O'));
// // gameView.updateBoard(game);

// console.log(game.board);

// game.makeMove(aI.findBestMove(game,game.turn));
// gameView.updateBoard(game);
// console.log(game.board);