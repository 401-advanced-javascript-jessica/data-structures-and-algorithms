'use strict';

function findMaxValue(node){
  if(node === null){
    return null;
  } else if (node.left === null && node.right === null) {
    return node.value;
  } else if (node.left === null && node.right !== null){
    return Math.max(findMaxValue(node.right), findMaxValue(node.value));
  } else if (node.right === null && node.left !== null) {
    return Math.max(findMaxValue(node.left), findMaxValue(node.value));
  } else{
    return Math.max(findMaxValue(node.value), findMaxValue(node.right), findMaxValue((node.left)));
  }
}