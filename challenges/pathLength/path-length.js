'use strict';

const pathLength = (node, parent, child) => {
  if(node === null){
    return null;
  }
  if (node === parent){
    //start counting
    return pathCount(parent, child, 0);
  } else {
    return pathLength(node.left, parent, child) || pathLength(node.right, parent, child);
  }

};

const pathCount = (node, child, count) => {
  if(node === null) {
    return null;
  }
  if (node === child){
    return count;
  } else {
    return pathCount(node.right, child, count + 1) || pathCount(node.left, child, count + 1);
  }
};

module.exports = pathLength;