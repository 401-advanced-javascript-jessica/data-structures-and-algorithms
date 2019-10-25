'use strict';

const isAPermutation = require('../is-a-permutation');



describe('Is a Permutation of String', () => {

  test('is a permutation', () => {
    expect(isAPermutation('god', 'dog')).toEqual(true);
  });

  test('is not a permutation', () => {
    expect(isAPermutation('cat', 'dog')).toEqual(false);
  });

});