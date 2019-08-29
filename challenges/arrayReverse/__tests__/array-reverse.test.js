const arrayReverse = require('../array-reverse');

describe('test arrayReverse function', () => {

  test('null array', () => {
    let arr = [];
    expect(arrayReverse(arr)).toEqual(-1);
  });

  test('non array', () => {
    let arr = {name: 'Jessica'};
    expect(arrayReverse(arr)).toEqual(-1);
  });

  test('array with even number of values', () => {
    let arr = [1, 2, 3, 4];
    expect(arrayReverse(arr)).toEqual([4, 3, 2, 1]);
  });

  test('array with odd number of values', () => {
    let arr = [1, 2, 3, 4, 5];
    expect(arrayReverse(arr)).toEqual([5, 4, 3, 2, 1]);
  });


});