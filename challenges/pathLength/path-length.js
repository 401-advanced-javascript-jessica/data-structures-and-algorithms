'use strict';

// const findDistance = (root, node) => {
//   //base case
//   if(root === null) {
//     return null;
//   }
//   if (root.value === node.value){
//     return 1;
//   }
//   // initialize distance to -1 since we'll start adding to distance at the root at the distance from root to root should be zero
//
//   //recursive case
//   //check to see if the root holds the value
//
//
//
// };
//
// const findPathLengthBetween = (root, parent, child) => {
//   let distanceToParent = findDistance(root, parent);
//   let distanceToChild = findDistance(root, child);
//   if(distanceToChild === null || distanceToChild === null){
//     return null;
//   } else {
//     return distanceToParent - distanceToChild;
//   }
// };

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