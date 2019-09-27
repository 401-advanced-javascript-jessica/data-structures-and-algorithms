const permutation = require('../string-permutations');

describe('permutation should find all the possible permutations of a string', () => {


  test('a two character string', () => {
    let result = new Set();
    result.add('12');
    result.add('21');
    expect(permutation('', '12')).toEqual(result);
  });

  test('a three character string', () => {
    let result = new Set();
    result.add('123');
    result.add('132');
    result.add('213');
    result.add('231');
    result.add('312');
    result.add('321');
    expect(permutation('', '123')).toEqual(result);
  });

  test('an empty string', () => {
    let empty = new Set();
    empty.add('');
    expect(permutation('', '')).toEqual(empty);
  });

  test('a four character string', () => {
    expect(permutation('', '1234').size).toEqual(24);
  });

});