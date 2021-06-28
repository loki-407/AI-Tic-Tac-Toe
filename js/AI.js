export default class AI {
    constructor() {

    }

    opponent(turn)
    {
        if(turn==='X')
            return 'O';
        else
            return 'X';
    }

    isMovesLeft(game) {
        for (let i = 0; i < game.board.length; i++) {
            if (!game.board[i])
                return true;
        }
        return false;
    }

    evaluate(game,turn) {
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

            if (game.board[a] && game.board[a] === game.board[b] && game.board[a] === game.board[c]) {
                if (game.board[a] == turn ) {
                    return 10;
                }
                else {
                    return -10;
                }
            }
        }
        return 0;
    }

    minimax(game, turn, depth, isMax) {
        // console.log(turn,isMax,depth);
        // console.log(game.board);
        // console.log(depth);
        let score = this.evaluate(game,turn);

        if(score!=0)
            return score; 

        if (this.isMovesLeft(game) == false)
            return 0;

        if(isMax)
        {
            let best=-1000;
            for(let i=0;i<game.board.length;i++)
            {
                if(game.board[i]===null)
                {
                    game.board[i]=turn;
                    best=Math.max(best,this.minimax(game,turn,depth+1,!isMax));
                    game.board[i]=null;
                }
            }
            return best;
        }
        else
        {
            let best=1000;
            for(let i=0;i<game.board.length;i++)
            {
                if(game.board[i]===null)
                {
                    game.board[i]=this.opponent(turn);
                    best=Math.min(best,this.minimax(game,turn,depth+1,!isMax));
                    game.board[i]=null;
                }
            }
            return best;
        }

    }

    findBestMove(game, turn) {
        //console.log("finding move");
        let bestVal = -1000;

        let move = -1;

        for (let i = 0; i < game.board.length; i++) {
            if (game.board[i]===null) {
                game.board[i] = turn;

                let moveVal = this.minimax(game, turn, 0, false);
                //  console.log(moveVal,i);
                game.board[i] = null;

                if (moveVal > bestVal) {
                    bestVal = moveVal;
                    move = i;
                }
            }
        }
        return move;
    }

}