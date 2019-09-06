'use strict';

const BinaryTree = require('../../../Data-Structures/binaryTree/binary-tree');
const BTNode = require('../../../Data-Structures/binaryTree/binary-tree-node');
const pathLength = require('../path-length');


describe('Find the distance between a parent and child node in a binary tree', () => {

  test('find the distance in a null tree', () => {
    let tree = new BinaryTree();
    expect(pathLength(tree.root, tree.root, tree.root)).toEqual(null);
  });

  test('find the distance in a tree with one node', () => {

    let tree = new BinaryTree();
    tree.root = new BTNode(10);
    expect(pathLength(tree.root, tree.root, tree.root)).toEqual(0);
  });

  test('shoud find the distance in a tree with multiple nodes', () => {
    let tree = new BinaryTree();
    let ten = new BTNode(10);
    tree.root = ten;
    let twenty = new BTNode(20);
    let thirty = new BTNode(30);
    let one = new BTNode(1);
    let two = new BTNode(2);
    let three = new BTNode(3);
    let four = new BTNode(4);

    ten.right = one;
    ten.left = twenty;
    one.right = two;
    two.left = three;
    twenty.right = thirty;
    three.right = four;

    expect(pathLength(tree.root, one, four)).toEqual(3);
  });


});