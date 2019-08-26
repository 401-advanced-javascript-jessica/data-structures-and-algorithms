'use strict';

// const Node = require('../linkedList/node');
const LinkedList = require('../linkedList/linked-list');

class Stack{
    constructor() {
        this.storage = new LinkedList();
        this.top = this.storage.head;
    }

    push(value){
        this.storage.insertAtHead(value);
        this.top = this.storage.head;
    }

    pop(){
        if(this.storage.head) {
            const head = this.storage.head.value;
            this.storage.head = this.storage.head.next;
            this.top = this.storage.head;
            return head;
        } else {
            return 'The Stack Is Empty';
        }
    }

    peek(){
        if(this.storage.head){
            return this.storage.head.value;
        } else {
            return 'The Stack Is Empty';
        }

    }
}

class Queue{
    constructor() {
        this.queueStorage = new LinkedList();
        this.front = this.queueStorage.head;
    }

    enqueue(value){
        if(!this.top){
            this.queueStorage.append(value);
            this.front = this.queueStorage.head;
        } else {
            this.queueStorage.append(value);
        }

    }

    dequeue(){
        if(!this.front){
            return 'The Queue Is Empty';
        }
        let value = this.front.value;
        this.front = this.front.next;
        return value;
    }

    peek(){
        if(this.front){
            return this.front.value;
        } else {
            return 'The Queue Is Empty';
        }

    }
}

module.exports = {};
module.exports.Stack = Stack;
module.exports.Queue = Queue;