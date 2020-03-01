import { NodeClass } from './NodeClass';

function initializeGameBoard() {
  // Creates a 6x7 game board of empty nodes
  // eslint-disable-next-line no-plusplus
  const gameBoard = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 7; i++) {
    // Push column into game board
    const newCol = [];
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < 6; j++) {
      // Push nodes into column
      const temp = new NodeClass(j, i, 0);
      newCol.push(temp);
    }
    gameBoard.push(newCol);
  }
  return gameBoard;
}

function placeChecker(row, column, player, gameBoard) {
  // eslint-disable-next-line no-param-reassign
  gameBoard[row - 1][column - 1].player = player;
}

function isRight(position, gameBoard) {
  let flag = false;
  flag = gameBoard[position.column - 1][position.row].player === 1;
  return flag;
}

function isLeft(position, gameBoard) {
  let flag = false;
  flag = gameBoard[position.column - 1][position.row - 2].player === 1;
  return flag;
}

function isBelow(position, gameBoard) {
  let flag = false;
  flag = gameBoard[position.column][position.row - 1].player === 1;
  return flag;
}

function isAbove(position, gameBoard) {
  let flag = false;
  flag = gameBoard[position.column - 2][position.row - 1].player === 1;
  return flag;
}

function isBelowAndRight(position, gameBoard) {
  let flag = false;
  flag = gameBoard[position.column][position.row].player === 1;
  return flag;
}

function isBelowAndLeft(position, gameBoard) {
  let flag = false;
  flag = gameBoard[position.column][position.row - 2].player === 1;
  return flag;
}

function isAboveAndRight(position, gameBoard) {
  let flag = false;
  flag = gameBoard[position.column - 2][position.row].player === 1;
  return flag;
}

function isAboveAndLeft(position, gameBoard) {
  let flag = false;
  flag = gameBoard[position.column - 2][position.row - 2].player === 1;
  return flag;
}

function playerTurn(gameBoard) {
  let column;
  column = prompt('Which column (1-7) do you want to play?', null);
  while (column < 1 || column > 7) {
    column = prompt('Which column (1-7) would you like to play?', null);
  }
  let i = 5;
  while (gameBoard[column - 1][i] !== 0) {
    // eslint-disable-next-line no-plusplus
    i--;
  }
  // eslint-disable-next-line no-param-reassign
  gameBoard[column - 1][i].player = 1;
}

function cpuTurn(gameBoard) {
  const column = 1;
  let i = 5;
  while (gameBoard[column - 1][i] !== 0) {
    // eslint-disable-next-line no-plusplus
    i--;
  }
  // eslint-disable-next-line no-param-reassign
  gameBoard[column - 1][i].player = 1;
}
