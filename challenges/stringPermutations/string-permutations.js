'use strict';

const permutation = (newString = '', word, set = new Set()) => {
  if(!word){
    set.add(newString);
  }
  for (let i = 0; i < word.length; i++){
    permutation(newString + word[i], word.slice(0,i) + word.slice(i+1), set);
  }
  return set;
};

module.exports = permutation;