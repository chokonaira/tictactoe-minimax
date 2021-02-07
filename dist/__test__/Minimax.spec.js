Object.defineProperty(exports, "__esModule", { value: true });
const Minimax_1 = require("../Minimax");
const tictactoe_board_1 = require("tictactoe-board");
test('checks that winning player evaluates for current player', () => {
    const grid = ['X', 'X', 'X', '', '', '', '', 'O', 'O'];
    const board = new tictactoe_board_1.default(grid);
    const minimax = new Minimax_1.default('X', 'O');
    expect(minimax.evaluate(board)).toEqual(10);
});
test('checks that winning player evaluates for opponent player', () => {
    const grid = ['X', 'X', '', '', '', '', 'O', 'O', 'O'];
    const board = new tictactoe_board_1.default(grid);
    const minimax = new Minimax_1.default('X', 'O');
    expect(minimax.evaluate(board)).toEqual(-10);
});
test('checks that winning player evaluates to a draw', () => {
    const grid = ['X', 'X', '', '', '', '', '', 'O', 'O'];
    const board = new tictactoe_board_1.default(grid);
    const minimax = new Minimax_1.default('X', 'O');
    expect(minimax.evaluate(board)).toEqual(0);
});
test('checks for the best initial move on an empty board state', () => {
    const grid = ['', '', '', '', '', '', '', '', ''];
    const board = new tictactoe_board_1.default(grid);
    const minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(1);
});
test('checks for the best move horizontally', () => {
    const grid = ['X', '', 'X', 'O', '', '', 'X', 'O', 'O'];
    const board = new tictactoe_board_1.default(grid);
    const minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(2);
});
test('checks for the best move vertically', () => {
    const grid = ['O', 'X', 'X', '', '', '', 'O', 'X', 'O'];
    const board = new tictactoe_board_1.default(grid);
    const minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(5);
});
test('checks for the best move diagonally', () => {
    const grid = ['X', 'O', 'O', '', 'X', '', 'O', 'X', ''];
    const board = new tictactoe_board_1.default(grid);
    const minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(9);
});
test('checks for the best move to block opponents move vertically', () => {
    const grid = ['X', 'O', '', '', 'O', '', '', '', 'X'];
    const board = new tictactoe_board_1.default(grid);
    const minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(8);
});
test('checks for the best move to block opponents move horizontally', () => {
    const grid = ['X', '', '', '', '', 'X', 'O', '', 'O'];
    const board = new tictactoe_board_1.default(grid);
    const minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(8);
});
test('checks for the best move to block opponents move diagonallly', () => {
    const grid = ['X', '', 'O', '', '', 'X', 'O', '', ''];
    const board = new tictactoe_board_1.default(grid);
    const minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(5);
});
test('checks for the best move to when the random player checkmates', () => {
    const grid = ['O', 'O', 'X', '', '', 'O', 'X', '', 'X'];
    const board = new tictactoe_board_1.default(grid);
    const minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(5);
});
test('checks for the best move for second round', () => {
    const grid = ['X', '', '', '', '', '', '', '', 'O'];
    const board = new tictactoe_board_1.default(grid);
    const minimax = new Minimax_1.default('X', 'O');
    expect(minimax.findBestMove(board)).toEqual(3);
});
