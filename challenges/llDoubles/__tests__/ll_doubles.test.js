'use strict';

const removeDuplicates = require('../ll_doubles');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(node){
    this.head = node;
  }
}

describe('Remove Duplicates from a Linked List', () => {

  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let one1 = new Node(1);
  let two2 = new Node(2);
  one.next = two;
  one.previous = null;
  two.next = three;
  two.previous = one;
  three.next = one1;
  three.previous = two;
  one1.next = four;
  one1.previous = three;
  four.next = two2;
  four.previous = one1;
  two2.previous = four;
  let list = new DoublyLinkedList(one);

  function toString(list) {
    let current = list.head;
    let string = '';
    while (current !== null){
      string += (current.value + ' ');
      current = current.next;
    }
    return string;
  }

  test('removes duplicates from list', () => {
    let newList = removeDuplicates(list);
    expect(toString(newList)).toEqual('1 2 3 4 ');
  });





});