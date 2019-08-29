'use strict'

const multiBracketValidation = require('../multi-bracket-validation');

describe('test multiBracketValidation function', () => {

    test('an empty string', () => {
        let str = '';
        expect(multiBracketValidation(str)).toEqual(false);
    });

    test('a string with length one', () => {
        let str = '}';
        expect(multiBracketValidation(str)).toEqual(false);
    });

    test('a string with balanced brackets', () => {
        let str = '[({})()]';
        expect(multiBracketValidation(str)).toEqual(true);
    });

    test('a string with unbalanced brackets', () => {
        let str = '[({[}])()]';
        expect(multiBracketValidation(str)).toEqual(false);
    });

    test('a string with balanced brackets and other characters', () => {
        let str = '[({stuff in the middle})()]';
        expect(multiBracketValidation(str)).toEqual(true);
    });


});