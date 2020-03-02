// eslint-disable-next-line import/prefer-default-export
export class NodeClass {
  constructor(row, col, player) {
    this.row = row;
    this.column = col;
    this.player = player;
  }

  get ownership() {
    return this.player;
  }

  set ownership(player) {
    this.player = player;
  }

  placeChecker(player, gameBoard) {
    // eslint-disable-next-line no-param-reassign
    gameBoard[this.column - 1][this.row - 1].player = player;
  }

  isRight(gameBoard) {
    let flag = false;
    flag = gameBoard[this.column - 1][this.row].player === 1;
    return flag;
  }

  isLeft(gameBoard) {
    let flag = false;
    flag = gameBoard[this.column - 1][this.row - 2].player === 1;
    return flag;
  }

  isBelow(gameBoard) {
    let flag = false;
    flag = gameBoard[this.column][this.row - 1].player === 1;
    return flag;
  }

  isAbove(gameBoard) {
    let flag = false;
    flag = gameBoard[this.column - 2][this.row - 1].player === 1;
    return flag;
  }

  isBelowAndRight(gameBoard) {
    let flag = false;
    flag = gameBoard[this.column][this.row].player === 1;
    return flag;
  }

  isBelowAndLeft(gameBoard) {
    let flag = false;
    flag = gameBoard[this.column][this.row - 2].player === 1;
    return flag;
  }

  isAboveAndRight(gameBoard) {
    let flag = false;
    flag = gameBoard[this.column - 2][this.row].player === 1;
    return flag;
  }

  isAboveAndLeft(gameBoard) {
    let flag = false;
    flag = gameBoard[this.column - 2][this.row - 2].player === 1;
    return flag;
  }
}
