const pseudoQueue = require('../queue-with-stacks');

describe('test queue with two stacks', () => {

    let newQueue = new pseudoQueue();

    test('Can successfully instantiate an empty queue', () => {
        expect(newQueue).toBeTruthy();
    });

    test('Can successfully enqueue into a queue', () => {
        newQueue.enqueue(10);
        expect(newQueue.dequeue()).toEqual(10);
    });

    test('Can successfully enqueue multiple values into a queue', () => {
        newQueue.enqueue(20);
        newQueue.enqueue(30);
        newQueue.enqueue(40);
        expect(newQueue.dequeue()).toEqual(20);
    });

    test('Can successfully dequeue out of a queue the expected value', () => {
        expect(newQueue.dequeue()).toEqual(30);
    });

});
