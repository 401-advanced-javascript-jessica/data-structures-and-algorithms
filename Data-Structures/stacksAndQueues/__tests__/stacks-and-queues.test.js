const Stack = require('../stacks-and-queues').Stack;
const Queue = require('../stacks-and-queues').Queue;

describe('Testing Stacks and Queues', () => {

  let newStack = new Stack();

  let newQueue = new Queue();

  test('Can successfully instantiate an empty stack', () => {
    expect(newStack).toBeTruthy();
    expect(newStack.top).toBeFalsy();
  });

  test('Can successfully push onto a stack', () => {
    newStack.push(4);
    expect(newStack.peek()).toEqual(4);
  });

  test('Can successfully push multiple values onto a stack', () => {
    newStack.push(5);
    newStack.push(6);
    newStack.push(7);
    expect(newStack.peek()).toEqual(7);
  });

  test('Can successfully pop off the stack', () => {
    expect(newStack.pop()).toEqual(7);
  });

  test('Can successfully empty a stack after multiple pops', () => {
    expect(newStack.pop()).toEqual(6);
    expect(newStack.pop()).toEqual(5);
    expect(newStack.pop()).toEqual(4);
    expect(newStack.pop()).toEqual('The Stack Is Empty');
  });

  test('Can successfully peek the next item on the stack', () => {
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.peek()).toEqual(3);
  });

  test('Can successfully instantiate an empty queue', () => {
    expect(newQueue).toBeTruthy();
    expect(newQueue.top).toBeFalsy();
  });

  test('Can successfully enqueue into a queue', () => {
    newQueue.enqueue(10);
    expect(newQueue.peek()).toEqual(10);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    newQueue.enqueue(20);
    newQueue.enqueue(30);
    newQueue.enqueue(40);
    expect(newQueue.peek()).toEqual(10);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    expect(newQueue.dequeue()).toEqual(10);
    expect(newQueue.peek()).toEqual(20);
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    expect(newQueue.peek()).toEqual(20);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    expect(newQueue.dequeue()).toEqual(20);
    expect(newQueue.dequeue()).toEqual(30);
    expect(newQueue.dequeue()).toEqual(40);
    expect(newQueue.peek()).toEqual('The Queue Is Empty');
  });

});