"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Minimax_1 = __importDefault(require("../Minimax"));
var tictactoe_board_1 = __importDefault(require("tictactoe-board"));
test('checks that winning player evaluates for current player', function () {
    var grid = ['X', 'X', 'X', '', '', '', '', 'O', 'O'];
    var board = new tictactoe_board_1.default(grid);
    var minimax = new Minimax_1.default('X', 'O');
    expect(minimax.evaluate(board)).toEqual(10);
});
test('checks that winning player evaluates for opponent player', function () {
    var grid = ['X', 'X', '', '', '', '', 'O', 'O', 'O'];
    var board = new tictactoe_board_1.default(grid);
    var minimax = new Minimax_1.default('X', 'O');
    expect(minimax.evaluate(board)).toEqual(-10);
});
test('checks that winning player evaluates to a draw', function () {
    var grid = ['X', 'X', '', '', '', '', '', 'O', 'O'];
    var board = new tictactoe_board_1.default(grid);
    var minimax = new Minimax_1.default('X', 'O');
    expect(minimax.evaluate(board)).toEqual(0);
});
test('checks for the best initial move on an empty board state', function () {
    var grid = ['', '', '', '', '', '', '', '', ''];
    var board = new tictactoe_board_1.default(grid);
    var minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(1);
});
test('checks for the best move horizontally', function () {
    var grid = ['X', '', 'X', 'O', '', '', 'X', 'O', 'O'];
    var board = new tictactoe_board_1.default(grid);
    var minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(2);
});
test('checks for the best move vertically', function () {
    var grid = ['O', 'X', 'X', '', '', '', 'O', 'X', 'O'];
    var board = new tictactoe_board_1.default(grid);
    var minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(5);
});
test('checks for the best move diagonally', function () {
    var grid = ['X', 'O', 'O', '', 'X', '', 'O', 'X', ''];
    var board = new tictactoe_board_1.default(grid);
    var minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(9);
});
test('checks for the best move to block opponents move vertically', function () {
    var grid = ['X', 'O', '', '', 'O', '', '', '', 'X'];
    var board = new tictactoe_board_1.default(grid);
    var minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(8);
});
test('checks for the best move to block opponents move horizontally', function () {
    var grid = ['X', '', '', '', '', 'X', 'O', '', 'O'];
    var board = new tictactoe_board_1.default(grid);
    var minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(8);
});
test('checks for the best move to block opponents move diagonallly', function () {
    var grid = ['X', '', 'O', '', '', 'X', 'O', '', ''];
    var board = new tictactoe_board_1.default(grid);
    var minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(5);
});
test('checks for the best move to when the random player checkmates', function () {
    var grid = ['O', 'O', 'X', '', '', 'O', 'X', '', 'X'];
    var board = new tictactoe_board_1.default(grid);
    var minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(5);
});
test('checks for the best move for second round', function () {
    var grid = ['X', '', '', '', '', '', '', '', 'O'];
    var board = new tictactoe_board_1.default(grid);
    var minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(3);
});
