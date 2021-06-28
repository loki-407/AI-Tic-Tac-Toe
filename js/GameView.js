export default class GameView {
    constructor() {
        // console.log("init GameView");
    }

    updateBoard(game) {
        this.updateTurn(game);

        const winningCombination = game.findWinningCombinations();
        // console.log(winningCombination);

        for (let i = 0; i < game.board.length; i++) {
            const tile = document.querySelector(`.board-tile[data-index="${i}"]`);
            tile.classList.remove("tile-winner");
            // console.log(tile);
            // tile.textContent = game.board[i];
            let tileType = game.board[i] == "X" ? "tile-x" : "tile-o";

            tile.innerHTML=`<span class="${tileType}">${game.board[i]?game.board[i]:""}</span>`

            if(winningCombination&&winningCombination.includes(i)){
                tile.classList.add("tile-winner");
            }

        }
    }

    updateTurn(game) {
        let playerX = document.querySelector(".player-X");
        let playerO = document.querySelector(".player-O");

        if (game.turn == "X") {
            playerX.classList.add("active");
            playerO.classList.remove("active");
        } else {
            playerX.classList.remove("active");
            playerO.classList.add("active");
        }
    }
}
