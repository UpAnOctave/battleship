import { Ship } from "./ship";

const create2DArray = function(filling = null) {
  let array = [];
  for(let i = 0; i<10; i++) {
    array.push([]);
    for(let j = 0; j<10; j++) {
      array[i].push(filling);
    }
  }
  
  return array;
}

const copyArray = function(original) {
  let copy = JSON.stringify(original);
  copy = JSON.parse(copy);
  return copy;
}

const checkSpace = function(layout, size, x, y, orientation) {
  if(orientation === 'horizontal') {
    if(size > 10-x) {
      throw 'Ship overflows the gameboard.';
    }
    else {
      for(let offset = 0; offset<size; offset++) {
        if(layout[x+offset][y] !== 'water') {
          throw 'Ship overlaps with other ship.';
        }
      }

      let leftLimit = x-1;
      let topLimit = y-1;
      let rightLimit = x+size;
      let bottomLimit = y+1;
      if(leftLimit < 0) {
        leftLimit = x;
      }

      if(topLimit < 0) {
        topLimit = y;
      }
      
      if(rightLimit > 9) {
        rightLimit = 9;
      }

      if(bottomLimit > 9) {
        bottomLimit = 9;
      }

      for(let xOffset = leftLimit; xOffset<=rightLimit; xOffset++) {
        for(let yOffset = topLimit; yOffset<=bottomLimit; yOffset++) {
          if((xOffset < x) || (xOffset > x+size-1) || (yOffset !== y)) {
            if(layout[xOffset][yOffset] !== 'water') {
              throw 'Ship is next to other ship.';
            }
          }
        }
      }
    }
  }

  else if(orientation === 'vertical') {
    if(size > 10-y) {
      throw 'Ship overflows the gameboard.';
    }
    else {
      for(let offset = 0; offset<size; offset++) {
        if(layout[x][y+offset] !== 'water') {
          throw 'Ship overlaps with other ship.';
        }
      }

      let leftLimit = x-1;
      let topLimit = y-1;
      let rightLimit = x+1;
      let bottomLimit = y+size;
      if(leftLimit < 0) {
        leftLimit = x;
      }

      if(topLimit < 0) {
        topLimit = y;
      }
      
      if(rightLimit > 9) {
        rightLimit = 9;
      }

      if(bottomLimit > 9) {
        bottomLimit = 9;
      }

      for(let xOffset = leftLimit; xOffset<=rightLimit; xOffset++) {
        for(let yOffset = topLimit; yOffset<=bottomLimit; yOffset++) {
          if((xOffset !== x) || (yOffset < y) || (yOffset > y+size-1)) {
            if(layout[xOffset][yOffset] !== 'water') {
              throw 'Ship is next to other ship.';
            }
          }
        }
      }
    }
  }
}

const checkAttack = function(x, y, gameboard) {
  if((gameboard.record[x][y] === 'hit') || (gameboard.record[x][y] === 'miss')) {
    throw 'Repeated attack.';
  }
}

class Gameboard {
  constructor() {
    this.layout = create2DArray('water');
    this.record = create2DArray();
    this.ships = [];
  }

  placeShip(x, y, orientation, size) {
    try {
      checkSpace(this.layout, size, x, y, orientation);
    } catch(error) {
      return error;
    }

    this.ships.push(new Ship(size));
    const shipID = this.ships.length-1;
    if(orientation === 'horizontal') {
      for(let offset = 0; offset<size; offset++) {
        this.layout[x+offset][y] = {
          id: shipID,
          orientation: orientation,
          part: offset
        };
      }
    }
    else if(orientation === 'vertical') {
      for(let offset = 0; offset<size; offset++) {
        this.layout[x][y+offset] = {
          id: shipID,
          orientation: orientation,
          part: offset
        };
      }
    }
  }

  moveShip(xo, yo, xf, yf) {
    const id = this.layout[xo][yo].id;
    const orientation = this.layout[xo][yo].orientation;
    const size = this.ships[id].size;
    const layoutWithoutShip = copyArray(this.layout);
    if(orientation === 'horizontal') {
      for(let offset = 0; offset<size; offset++) {
        layoutWithoutShip[xo+offset][yo] = 'water';
      }
    }
    else if(orientation === 'vertical') {
      for(let offset = 0; offset<size; offset++) {
        layoutWithoutShip[xo][yo+offset] = 'water';
      }
    }

    try {
      checkSpace(layoutWithoutShip, size, xf, yf, orientation);
    } catch(error) {
      return error;
    }

    if(orientation === 'horizontal') {
      for(let offset = 0; offset<size; offset++) {
        this.layout[xo+offset][yo] = 'water';
      }
    }
    else if(orientation === 'vertical') {
      for(let offset = 0; offset<size; offset++) {
        this.layout[xo][yo+offset] = 'water';
      }
    }

    if(orientation === 'horizontal') {
      for(let offset = 0; offset<size; offset++) {
        this.layout[xf+offset][yf] = {
          id: id,
          orientation: orientation,
          part: offset
        };
      }
    }
    else if(orientation === 'vertical') {
      for(let offset = 0; offset<size; offset++) {
        this.layout[xf][yf+offset] = {
          id: id,
          orientation: orientation,
          part: offset
        };
      }
    }
  }

  rotateShip(x, y) {
    const id = this.layout[x][y].id;
    const orientation = this.layout[x][y].orientation;
    const size = this.ships[id].size;
    let newOrientation;
    if(orientation === 'horizontal') {
      newOrientation = 'vertical';
    }
    else if(orientation === 'vertical') {
      newOrientation = 'horizontal';
    }

    const layoutWithoutShip = copyArray(this.layout);
    if(orientation === 'horizontal') {
      for(let offset = 0; offset<size; offset++) {
        layoutWithoutShip[x+offset][y] = 'water';
      }
    }
    else if(orientation === 'vertical') {
      for(let offset = 0; offset<size; offset++) {
        layoutWithoutShip[x][y+offset] = 'water';
      }
    }

    try {
      checkSpace(layoutWithoutShip, size, x, y, newOrientation);
    } catch(error) {
      return error;
    }

    if(orientation === 'horizontal') {
      for(let offset = 0; offset<size; offset++) {
        this.layout[x+offset][y] = 'water';
      }
    }
    else if(orientation === 'vertical') {
      for(let offset = 0; offset<size; offset++) {
        this.layout[x][y+offset] = 'water';
      }
    }

    if(newOrientation === 'horizontal') {
      for(let offset = 0; offset<size; offset++) {
        this.layout[x+offset][y] = {
          id: id,
          orientation: 'horizontal',
          part: offset
        };
      }
    }
    else if(newOrientation === 'vertical') {
      for(let offset = 0; offset<size; offset++) {
        this.layout[x][y+offset] = {
          id: id,
          orientation: 'vertical',
          part: offset
        };
      }
    }
  }

  receiveAttack(x, y) {
    try {
      checkAttack(x, y, this);
    } catch(error) {
      return error;
    }
    const shot = this.layout[x][y];
    if(shot === 'water') {
      this.record[x][y] = 'miss';
    }

    else {
      this.ships[shot.id].hit(shot.part);
      this.record[x][y] = 'hit';
    }
  }

  areAllShipsSunk() {
    return this.ships.every(function(ship) {return ship.isSunk()});
  }
}

export {
  Gameboard
};
