'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertAtHead(value){
    const newHead = new Node(value);

    if (this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  }

  includes(value) {
      let current = this.head;
    while(current !== null){
        if(current.value === value){
            return true;
        }
        current = current.next;
    }
    return false;
  }

  toString() {
      let current = this.head;
      let string = '';
      while (current !== null){
        string += (current.value + ' ');
        current = current.next;
      }
      console.log(string);
      return string;
  }

  remove(index) {
      let current = this.head;
      let count = 0;
      let previous = this.head;
      while (current !== null){
        if(count === index){
            previous.next = current.next;
            return current.value;
        }
        previous = current;
        current = current.next;
        count++;
      }
  }

  traverse() {
   let current = this.head;
   while(current !== null) {
     // SOMETHING ELSE n_n
     current = current.next;
   }
  }
}

module.exports = LinkedList;