'use strict';

const BinaryTree = require('../../../Data-Structures/binaryTree/binary-tree');
const BTNode = require('../../../Data-Structures/binaryTree/binary-tree-node');
const findLeafNodes = require('../find-leaves');


describe('Test Find Leaf Nodes in a Binary Tree', () => {

  test('shoud find the leaf nodes of a tree with one node', () => {
    let tree = new BinaryTree();
    tree.root = new BTNode(10);
    expect(findLeafNodes(tree.root)).toEqual([tree.root]);
  });

  test('shoud find the leaf nodes of a tree with several leaf nodes', () => {
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

    expect(findLeafNodes(tree.root)).toEqual([three, thirty]);
  });


});