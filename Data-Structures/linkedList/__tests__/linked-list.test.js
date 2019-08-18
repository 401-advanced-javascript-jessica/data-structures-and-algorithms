const linkedList = require('../linked-list');

describe('Testing Liked List', () => {

test('Create an empty list', () => {
    let newList = new linkedList();
    expect(newList.head).toEqual(null);
})

test('Test Insert into', () => {
    let newList = new linkedList();
    newList.insertAtHead(1);
    expect(newList.head).toBeTruthy();
})

test('Test head', () => {
    let newList = new linkedList();
    newList.insertAtHead(1);
    expect(newList.head).toEqual({'next': null, 'value': 1});
})

test('Test insert multiple', () => {
    let newList = new linkedList();
    newList.insertAtHead(1);
    newList.insertAtHead(2);
    newList.insertAtHead(3);
    newList.insertAtHead(4);
    expect(newList.head.value).toEqual(4);
    expect(newList.head.next.value).toEqual(3);
})

test('Search for a value that exists in the list', () => {
    let newList = new linkedList();
    newList.insertAtHead(1);
    newList.insertAtHead(2);
    newList.insertAtHead(3);
    newList.insertAtHead(4);
    expect(newList.includes(3)).toEqual(true);
})

test('Search for a value that does not exists in the list', () => {
    let newList = new linkedList();
    newList.insertAtHead(1);
    newList.insertAtHead(2);
    newList.insertAtHead(3);
    newList.insertAtHead(4);
    expect(newList.includes(7)).toEqual(false);
})

test('Test toString and reveal all the items in the list', () => {
    let newList = new linkedList();
    newList.insertAtHead(1);
    newList.insertAtHead(2);
    newList.insertAtHead(3);
    newList.insertAtHead(4);
    newList.insertAtHead(4);
    expect(newList.toString()).toEqual('4 4 3 2 1 ');
})

test('Test that remove() removes an item from the list', () => {
    let newList = new linkedList();
    newList.insertAtHead(1);
    newList.insertAtHead(2);
    newList.insertAtHead(3);
    newList.insertAtHead(4);
    newList.insertAtHead(4);
    expect(newList.remove(1)).toEqual(4);
    expect(newList.toString()).toEqual('4 3 2 1 ');
})

})