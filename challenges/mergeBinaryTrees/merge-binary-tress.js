'use strict';

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  let t3 = new TreeNode(0);

  if(!t1 && !t2){
    return null;
  }
  if(t1 && t2){
    t3.val = (t1.val + t2.val)
    t3.right = mergeTrees(t1.right, t2.right);
    t3.left = mergeTrees(t1.left, t2.left);
  } else if (t1 && !t2){
    t3.val = (t1.val);
    t3.right = mergeTrees(t1.right, null);
    t3.left = mergeTrees(t1.left, null);
  } else if (!t1 && t2){
    t3.val = (t2.val);
    t3.right = mergeTrees(null, t2.right);
    t3.left = mergeTrees(null, t2.left);
  }


  return t3;
};