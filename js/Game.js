export default class Game {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    nextTurn() {
        if (this.turn == "X") {
            this.turn = "O";
        } else {
            this.turn = "X";
        }
    }

    makeMove(i) {

        if(this.endOfGame()){
            return;
        }

        if (this.board[i]) {
            return;
        }

        this.board[i] = this.turn;
        let winningCombination=this.findWinningCombinations();

        if(!winningCombination)
        {
            // console.log("changing move");
            this.nextTurn();
            return true;
        }
        else
        return false;
    }

    findWinningCombinations() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ]

        for (const com of winningCombinations) {

            const [a, b, c] = com;

            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return com;
            }
        }
        return null;
    }

    
    endOfGame(){
        let winningCombination = this.findWinningCombinations();
        if(winningCombination)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

};