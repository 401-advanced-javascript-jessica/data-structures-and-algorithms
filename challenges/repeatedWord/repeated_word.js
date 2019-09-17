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

//a solution with no library methods and less memory usage
const altFirstRepeatedWord = (string) => {
  let words = new Set();
  let word = '';
  let i = 0;
  let regex = /[a-zA-Z']/;
  do {
    while(regex.test(string[i])){
      word += string[i];
      i++;
    }
    if(words.has(word.toLowerCase())){
      return word;
    } else if(word){
      words.add(word.toLowerCase());
    }
    i++;
    word = '';
  } while (i < string.length);


  return 'no repeats';
};

module.exports = altFirstRepeatedWord;