'use-strict';

const isAPermutation = (str1, str2) => {
  if(!str1 || !str2) {
    return false;
  }
  if(str1.length !== str2.length){
    return false;
  }

  let letters = new Set();
  for(let i = 0; i < str1.length; i++){
    letters.add(str1[i]);
  }
  for(let i = 0; i < str2.length; i++){
    if(!letters.has(str2[i])){
      return false;
    }
  }
  return true;
};

module.exports = isAPermutation;

