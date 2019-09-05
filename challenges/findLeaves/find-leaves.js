'use strict';

const findLeafNodes = (node, arr = []) => {
  if (node === null){
    return;
  } else if (node.right === null && node.left === null){
    arr.push(node);
  }
  findLeafNodes(node.right, arr);
  findLeafNodes(node.left, arr);

  return arr;
};

module.exports = findLeafNodes;