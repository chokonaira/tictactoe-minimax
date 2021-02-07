Object.defineProperty(exports, "__esModule", { value: true });
class Minimax {
    constructor(currentPlayer, opponent) {
        this.currentPlayer = currentPlayer;
        this.opponent = opponent;
    }
    findBestMove(board) {
        let bestValue = -1000;
        let bestMove = 0;
        board.availablePositions().forEach((position) => {
            const newBoard = board.makeMove(position, this.currentPlayer);
            const moveValue = this.miniMax(newBoard, 0, false);
            if (moveValue > bestValue) {
                bestMove = position;
                bestValue = moveValue;
            }
        });
        return bestMove;
    }
    evaluate(board, depth = 0) {
        if (board.winningPlayer() === this.currentPlayer) {
            return 10 - depth;
        }
        else if (board.winningPlayer() === this.opponent) {
            return depth - 10;
        }
        else {
            return 0;
        }
    }
    miniMax(board, depth, isMax) {
        const score = this.evaluate(board, depth);
        if (score !== 0)
            return score;
        if (board.isGameDraw())
            return 0;
        if (isMax) {
            let bestValue = -1000;
            board.availablePositions().forEach((position) => {
                const newBoard = board.makeMove(position, this.currentPlayer);
                bestValue = Math.max(bestValue, this.miniMax(newBoard, depth + 1, !isMax));
            });
            return bestValue;
        }
        else {
            let bestValue = 1000;
            board.availablePositions().forEach((position) => {
                const newBoard = board.makeMove(position, this.opponent);
                bestValue = Math.min(bestValue, this.miniMax(newBoard, depth + 1, !isMax));
            });
            return bestValue;
        }
    }
}
exports.default = Minimax;
