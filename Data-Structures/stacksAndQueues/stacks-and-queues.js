'use strict';

const Node = require('../linkedList/node');
const LinkedList = require('../linkedList/linked-list');

class Stack{
    constructor() {
        this.storage = new LinkedList();
        this.top = this.storage.head;
    }

    push(value){
        this.storage.insertAtHead(value);
    }

    pop(){
        const head = this.storage.head;
        this.storage.head = this.storage.head.next;
        return head;
    }

    peek(){
        return this.head;
    }
}

class Queue{
    constructor() {
        this.queueStorage = new LinkedList();
        this.front = this.queueStorage.head;
    }

    enqueue(value){
        this.queueStorage.insertAtHead(value);
    }

    dequeue(){
        let current = this.head;
        let previous = this.head;
        while (current.next !== null){
            previous = current;
            current = current.next;
        }
        previous.next = null;
        return current.value;
    }

    peek(){
        let current = this.head;
        while (current.next !== null){
            current = current.next;
        }
        return current.value;
    }
}