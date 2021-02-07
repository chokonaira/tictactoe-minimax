"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Minimax = (function () {
    function Minimax(currentPlayer, opponent) {
        this.currentPlayer = currentPlayer;
        this.opponent = opponent;
    }
    Minimax.prototype.findBestMove = function (board) {
        var _this = this;
        var bestValue = -1000;
        var bestMove = 0;
        board.availablePositions().forEach(function (position) {
            var newBoard = board.makeMove(position, _this.currentPlayer);
            var moveValue = _this.miniMax(newBoard, 0, false);
            if (moveValue > bestValue) {
                bestMove = position;
                bestValue = moveValue;
            }
        });
        return bestMove;
    };
    Minimax.prototype.evaluate = function (board, depth) {
        if (depth === void 0) { depth = 0; }
        if (board.winningPlayer() === this.currentPlayer) {
            return 10 - depth;
        }
        else if (board.winningPlayer() === this.opponent) {
            return depth - 10;
        }
        else {
            return 0;
        }
    };
    Minimax.prototype.miniMax = function (board, depth, isMax) {
        var _this = this;
        var score = this.evaluate(board, depth);
        if (score !== 0)
            return score;
        if (board.isGameDraw())
            return 0;
        if (isMax) {
            var bestValue_1 = -1000;
            board.availablePositions().forEach(function (position) {
                var newBoard = board.makeMove(position, _this.currentPlayer);
                bestValue_1 = Math.max(bestValue_1, _this.miniMax(newBoard, depth + 1, !isMax));
            });
            return bestValue_1;
        }
        else {
            var bestValue_2 = 1000;
            board.availablePositions().forEach(function (position) {
                var newBoard = board.makeMove(position, _this.opponent);
                bestValue_2 = Math.min(bestValue_2, _this.miniMax(newBoard, depth + 1, !isMax));
            });
            return bestValue_2;
        }
    };
    return Minimax;
}());
exports.default = Minimax;
