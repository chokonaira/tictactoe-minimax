## Tic Tac Toe Minimax

A Tic Tac Toe Minimax Algorithm module in typescript to find best move on a given board 

![Node.js CI](https://github.com/chokonaira/tictactoe-minimax/workflows/Node.js%20CI/badge.svg)


### Installation

#### Minimax Module

`npm install ttt-minimax-typescript --save`

#### [Board Module](https://github.com/chokonaira/tictactoe-board)

`npm install ttt-minimax-typescript --save`


#### Usage

`import Minimax from ttt-minimax-typescript`

`import Board from tictactoe-board`


#### Intialize an instance object of the Minimax and Board 

```
const board = new Board();

const minimax = new Minimax(currentPlayer: string, opponent: string);
```
```
Example:

const minimax = new Minimax('X, 'O);
```

You can pass in an `optional` custom Array of Strings as parameter to the Board
```
Example:
 
board = new Board(['X', 'X', '', '', 'O', 'O', '', '', ''])

now board.grid = ['X', 'X', '', '', 'O', 'O', '', '', '']

instead of default grid = ['', '', '', '', '', '', '', '', '']
```
### Methods

### `minimax.findBestMove(board)`

This returns the best winning index of the given board
```
Example sceenerio:

const baord = new Board();

minimax.findBestMove(board) = ['X', '', '', '', '', '', '', '', ''] = 1

That means position one is the best optimal position for the opponent to pick
