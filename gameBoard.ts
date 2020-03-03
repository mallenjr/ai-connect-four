type currentBoard = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  board: number[7][7];
};

class GameBoard {
  private slotList: currentBoard;

  constructor(slotList: currentBoard) {
    this.slotList = slotList;
  }

  ghostChecker(column: number) {
    // Get the last index that has a checker
    const index = this.slotList.board[column - 1][6];
    this.slotList.board[column - 1][index] = 2;
    return index;
  }

  isRight(column: number, row: number) {
    let flag = false;
    if (this.slotList.board[column - 2][row] === 2) {
      flag = true;
    }
    return flag;
  }

  isLeft(column: number, row: number) {
    let flag = false;
    if (this.slotList.board[column][row] === 2) {
      flag = true;
    }
    return flag;
  }

  isUnder(column: number, row: number) {
    let flag = false;
    if (this.slotList.board[column - 1][row - 1] === 2) {
      flag = true;
    }
    return flag;
  }

  isAbove(column: number, row: number) {
    let flag = false;
    if (this.slotList.board[column - 1][row + 1] === 2) {
      flag = true;
    }
    return flag;
  }

  isRightAndAbove(column: number, row: number) {
    let flag = false;
    if (this.slotList.board[column - 2][row + 1] === 2) {
      flag = true;
    }
    return flag;
  }

  isRightAndUnder(column: number, row: number) {
    let flag = false;
    if (this.slotList.board[column - 2][row - 1] === 2) {
      flag = true;
    }
    return flag;
  }

  isLeftAndAbove(column: number, row: number) {
    let flag = false;
    if (this.slotList.board[column][row + 1] === 2) {
      flag = true;
    }
    return flag;
  }

  isLeftAndUnder(column: number, row: number) {
    let flag = false;
    if (this.slotList.board[column][row - 1] === 2) {
      flag = true;
    }
    return flag;
  }
}
