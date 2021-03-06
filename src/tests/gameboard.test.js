import { Gameboard } from '../gameboard';

test('layout is a two dimensional array filled with water', () => {
  const gameboard = new Gameboard();
  expect(gameboard.layout.every(function(x) {
    return x.every(function(y) {
      if(y === 'water') {
        return true;
      }
    });
  })).toBe(true);
});

test('can place ships at given coordinates', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, 3, 'horizontal', 3);
  expect(gameboard.layout[3][3]).toEqual({id: 0, orientation: 'horizontal', part: 0});
  expect(gameboard.layout[4][3]).toEqual({id: 0, orientation: 'horizontal', part: 1});
  expect(gameboard.layout[5][3]).toEqual({id: 0, orientation: 'horizontal', part: 2});
  gameboard.placeShip(6, 6, 'vertical', 4);
  expect(gameboard.layout[6][6]).toEqual({id: 1, orientation: 'vertical', part: 0});
  expect(gameboard.layout[6][7]).toEqual({id: 1, orientation: 'vertical', part: 1});
  expect(gameboard.layout[6][8]).toEqual({id: 1, orientation: 'vertical', part: 2});
  expect(gameboard.layout[6][9]).toEqual({id: 1, orientation: 'vertical', part: 3});
});

test('can move a ship', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(1, 1, 'vertical', 2);
  gameboard.moveShip(1, 1, 3, 3);
  expect(gameboard.layout[1][1]).toBe('water');
  expect(gameboard.layout[1][2]).toBe('water');
  expect(gameboard.layout[3][3]).toEqual({id: 0, orientation: 'vertical', part: 0});
  expect(gameboard.layout[3][4]).toEqual({id: 0, orientation: 'vertical', part: 1});
});

test('can rotate a ship', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(1, 1, 'vertical', 3);
  gameboard.rotateShip(1, 1);
  expect(gameboard.layout[1][1]).toEqual({id: 0, orientation: 'horizontal', part: 0});
  expect(gameboard.layout[2][1]).toEqual({id: 0, orientation: 'horizontal', part: 1});
  expect(gameboard.layout[3][1]).toEqual({id: 0, orientation: 'horizontal', part: 2});
  expect(gameboard.layout[1][2]).toBe('water');
  expect(gameboard.layout[1][3]).toBe('water');
});

test('can\'t place ships that overflow the gameboard', () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(6, 0, 'horizontal', 5)).toBe('Ship overflows the gameboard.');
});

test('can\'t place ships that overlap with another ship', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, 3, 'horizontal', 4);
  expect(gameboard.placeShip(4, 2, 'vertical', 3)).toBe('Ship overlaps with other ship.');
});

test('can\'t place a ship next to another ship', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(4, 4, 'vertical', 3);
  expect(gameboard.placeShip(3, 4, 'vertical', 4)).toBe('Ship is next to other ship.');
  expect(gameboard.placeShip(2, 5, 'horizontal', 2)).toBe('Ship is next to other ship.');
});

test('attack hits a ship or records missed shot', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(4, 4, 'vertical', 3);
  gameboard.receiveAttack(4, 6);
  expect(gameboard.record[4][6]).toBe('hit');
  expect(gameboard.ships[0].damage[2]).toBe(true);
  gameboard.receiveAttack(7, 8);
  expect(gameboard.record[7][8]).toBe('miss');
});

test('reports when all ships are sunken', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(1, 2, 'vertical', 3);
  gameboard.placeShip(4, 5, 'horizontal', 2);
  gameboard.receiveAttack(1, 2);
  gameboard.receiveAttack(1, 3);
  gameboard.receiveAttack(4, 5);
  gameboard.receiveAttack(5, 5);
  expect(gameboard.areAllShipsSunk()).toBe(false);
  gameboard.receiveAttack(1, 4);
  expect(gameboard.areAllShipsSunk()).toBe(true);
});

test('can\'t attack same place twice', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack(4, 4);
  expect(gameboard.receiveAttack(4, 4)).toBe('Repeated attack.');
});
