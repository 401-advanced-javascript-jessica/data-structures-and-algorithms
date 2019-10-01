'use strict';

const leftJoin = require('../left-join');


describe('Find the left join of two hashmaps', () => {

  test('Both hashmaps have all the keys', () => {
    let synonym = {
      'fond': 'enamoured',
      'wrath': 'anger',
      'diligent': 'employed',
    };

    let antonym = {
      'fond': 'averse',
      'wrath': 'delight',
      'diligent': 'idle',
    };

    let result = [
      ['fond', 'enamoured', 'averse'],
      ['wrath', 'anger','delight'],
      ['diligent', 'employed', 'idle'],
    ];

    expect(leftJoin(synonym, antonym)).toEqual(result);
  });

  test('The first hashmaps has more keys', () => {
    let synonym = {
      'fond': 'enamoured',
      'wrath': 'anger',
      'diligent': 'employed',
      'outfit': 'garb',
    };

    let antonym = {
      'fond': 'averse',
      'wrath': 'delight',
      'diligent': 'idle',
    };

    let result = [
      ['fond', 'enamoured', 'averse'],
      ['wrath', 'anger','delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
    ];

    expect(leftJoin(synonym, antonym)).toEqual(result);
  });


});