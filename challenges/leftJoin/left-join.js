'use strict';

const leftJoin = (obj1, obj2) => {
  let keys = Object.keys(obj1);
  let results = [];
  keys.forEach( (key) => {
    let entry = [key, obj1[key]];
    if(obj2[key]){
      entry.push(obj2[key]);
    } else {
      entry.push(null);
    }
    results.push(entry);
  });
  return results;
};

module.exports = leftJoin;