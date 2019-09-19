'use strict';

function removeDuplicates(list){
  if(list.head.value === null){
    return null;
  }
  let set = new Set();
  let current = list.head;

  while (current !== null){
    if(set.has(current.value)){
      current.previous.next = current.next;
      if (current.next !== null){
        current.next.previous = current.previous;
      }
    } else {
      set.add(current.value);
    }
    current = current.next;
  }
  return list;
}

module.exports = removeDuplicates;

