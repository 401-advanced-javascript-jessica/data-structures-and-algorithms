'use strict';

const Stack = require('../../Data-Structures/stacksAndQueues/stacks-and-queues').Stack;

class PseudoQueue {

  constructor(){
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(value){
    this.stackA.push(value);
  }

  dequeue(){
    if(!this.stackB.top){
      while(this.stackA.top){
        let temp = this.stackA.pop();
        this.stackB.push(temp);
      }
    }
    return this.stackB.pop();
  }
}

module.exports = PseudoQueue;