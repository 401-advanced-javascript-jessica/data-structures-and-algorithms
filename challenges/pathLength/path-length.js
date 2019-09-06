'use strict';

const findDistance = (root, node) => {
  //base case
  if(root === null) {
    return null;
  }
  // initialize distance to -1 since we'll start adding to distance at the root at the distance from root to root should be zero
  let distance = -1;

  //recursive case
  //check to see if the root holds the value
  if ((root.value === node.value) || (distance = findDistance(root.left, node)) >= 0 || (distance = findDistance(root.right, node)) >= 0) {
    return distance + 1;
  }
  return distance;

};

const findPathLengthBetween = (root, parent, child) => {
  let distanceToParent = findDistance(root, parent);
  let distanceToChild = findDistance(root, child);
  if(distanceToChild === null || distanceToChild === null){
    return null;
  } else {
    return distanceToParent - distanceToChild;
  }
};

module.exports = findPathLengthBetween;