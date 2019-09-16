'use strict';

const firstRepeatedWord = (string) => {
  let words = new Set();
  let arr = removeSyntax(string);
  for(let i = 0; i < arr.length; i++){
    if(words.has(arr[i].toLowerCase())){
      return arr[i];
    } else {
      words.add(arr[i].toLowerCase());
    }
  }
  return 'no repeats';
};

const removeSyntax = (string) => {
  let regex = /[a-zA-Z']+/g;
  let word = string.match(regex);
  return string.match(regex);
};


module.exports = firstRepeatedWord;