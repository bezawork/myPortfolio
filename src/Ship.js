class Ship {
  constructor(y, x, length, horizontal) {
    this.y = y;
    this.x = x;
    this.length = length;
    this.horizontal = horizontal;
  }

  placeShip(battleShipFirstState) {
    if (this.horizontal === true) {
      for (let i = 0; i < this.length; i++) {
        battleShipFirstState[this.y][this.x + i] = this;
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        battleShipFirstState[this.y + i][this.x] = this;
      }
    }
  }
}
export default Ship;
