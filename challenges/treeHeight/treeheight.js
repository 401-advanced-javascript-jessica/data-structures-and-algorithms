'use strict';

function getTreeHeight(node, count = 0){
  if(node === null){
    return count;
  } else if (node.left === null && node.right !== null){
    return getTreeHeight(node.right, count + 1);
  } else if (node.right === null && node.left !== null){
    return getTreeHeight(node.left, count + 1);
  } else if (node.right === null && node.left === null){
    return count;
  } else {
    return Math.max(getTreeHeight(node.right, count + 1), getTreeHeight(node.left, count + 1));
  }
}

module.exports = getTreeHeight;