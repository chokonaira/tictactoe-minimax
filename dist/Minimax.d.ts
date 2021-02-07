import Board from 'tictactoe-board';
declare class Minimax {
    currentPlayer: string;
    opponent: string;
    constructor(currentPlayer: string, opponent: string);
    findBestMove(board: Board): number;
    evaluate(board: Board, depth?: number): number;
    miniMax(board: Board, depth: number, isMax: boolean): number;
}
export default Minimax;
