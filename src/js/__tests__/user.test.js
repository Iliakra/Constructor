/* eslint-disable no-undef */
import Character from '../app';

test('should return Error with incorrect insert of name', () => {
  expect(() => {
    Character('2', 'Daemon');
  }).toThrow(new Error('Ошибка ввода!'));
});

test('should return Error with incorrect insert of type', () => {
  expect(() => {
    Character('Andy', 'trey');
  }).toThrow(new Error('Ошибка ввода!'));
});

test('if type is Bowman', () => {
  const obj = new Character('Trey', 'Bowman');
  const received = obj;
  const expected = {
    attackDefence: 'Bowman: 25/25', health: 100, level: 1, name: 'Trey', type: 'Bowman',
  };
  expect(received).toEqual(expected);
});

test('if type is Swordsman', () => {
  const obj = new Character('Trey', 'Swordsman');
  const received = obj;
  const expected = {
    attackDefence: 'Swordsman: 40/10', health: 100, level: 1, name: 'Trey', type: 'Swordsman',
  };
  expect(received).toEqual(expected);
});

test('if type is Magician', () => {
  const obj = new Character('Trey', 'Magician');
  const received = obj;
  const expected = {
    attackDefence: 'Magician: 10/40', health: 100, level: 1, name: 'Trey', type: 'Magician',
  };
  expect(received).toEqual(expected);
});

test('if type is Daemon', () => {
  const obj = new Character('Trey', 'Daemon');
  const received = obj;
  const expected = {
    attackDefence: 'Daemon: 10/40', health: 100, level: 1, name: 'Trey', type: 'Daemon',
  };
  expect(received).toEqual(expected);
});

test('if type is Undead', () => {
  const obj = new Character('Trey', 'Undead');
  const received = obj;
  const expected = {
    attackDefence: 'Undead: 25/25', health: 100, level: 1, name: 'Trey', type: 'Undead',
  };
  expect(received).toEqual(expected);
});


test('if type is Zombie', () => {
  const obj = new Character('Trey', 'Zombie');
  const received = obj;
  const expected = {
    attackDefence: 'Zombie: 40/10', health: 100, level: 1, name: 'Trey', type: 'Zombie',
  };
  expect(received).toEqual(expected);
});
