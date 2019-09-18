'use strict';

const BinaryTree = require('../../../Data-Structures/binaryTree/binary-tree');
const BTNode = require('../../../Data-Structures/binaryTree/binary-tree-node');
const getTreeHeight = require('../treeheight');


describe('Find the height of a Binary Tree', () => {

  test('Find the heigt of a null tree', () => {
    let tree = new BinaryTree();
    expect(getTreeHeight(tree.root, 0)).toEqual(0);

  });

  test('Find the height of a tree with one node', () => {
    let tree = new BinaryTree();
    tree.root = new BTNode(10);
    expect(getTreeHeight(tree.root, 0)).toEqual(0);
  });

  test('Find the height of a non-complete tree', () => {
    let tree = new BinaryTree();
    let ten = new BTNode(10);
    tree.root = ten;
    let twenty = new BTNode(20);
    let thirty = new BTNode(30);
    let one = new BTNode(1);
    let two = new BTNode(2);
    let three = new BTNode(3);

    ten.right = one;
    ten.left = twenty;
    one.right = two;
    two.left = three;
    twenty.right = thirty;

    expect(getTreeHeight(tree.root)).toEqual(3);
  });


});