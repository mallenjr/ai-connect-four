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
}
