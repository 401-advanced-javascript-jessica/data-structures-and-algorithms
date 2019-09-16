'use strict';

const firstRepeatedWord = require('../repeated_word');

describe('firstRepeatedWord should find the first repeated work in a string', () => {

  let text1 = 'Once upon a time, there was a brave princess who...';
  let text2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
  let text3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
  let text4 = 'A string with no repeated words.';

  test('first repeated word', () => {
    expect(firstRepeatedWord(text1)).toEqual('a');
  });

  test('first repeated word with capitals', () => {
    expect(firstRepeatedWord(text2)).toEqual('it');
  });

  test('first repeated word with syntax attached', () => {
    expect(firstRepeatedWord(text3)).toEqual('summer');
  });

  test('no repeated words', () => {
    expect(firstRepeatedWord(text4)).toEqual('no repeats');
  });

});