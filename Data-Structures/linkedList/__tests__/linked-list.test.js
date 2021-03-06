const linkedList = require('../linked-list');

describe('Testing Liked List', () => {

  let newList = new linkedList();
  newList.insertAtHead(1);
  newList.insertAtHead(2);
  newList.insertAtHead(3);
  newList.insertAtHead(4);
  newList.insertAtHead(4);

  let newList2 = new linkedList();
  newList2.insertAtHead(1);
  newList2.insertAtHead(2);
  newList2.insertAtHead(3);
  newList2.insertAtHead(4);

  let list = new linkedList();
  list.insertAtHead(1);
  list.insertAtHead(2);
  list.insertAtHead(3);
  list.insertAtHead(4);
  list.insertAtHead(5);
  list.insertAtHead(6);

  test('Create an empty list', () => {
    let nullList = new linkedList();
    expect(nullList.head).toEqual(null);
  });

  test('Test Insert into', () => {
    let oneList = new linkedList();
    oneList.insertAtHead(1);
    expect(oneList.head).toBeTruthy();
  });

  test('Test head', () => {
    let headList = new linkedList();
    headList.insertAtHead(1);
    expect(headList.head).toEqual({'next': null, 'value': 1});
  });

  test('Test insert multiple', () => {
    expect(newList.head.value).toEqual(4);
    expect(newList.head.next.value).toEqual(4);
  });

  test('Search for a value that exists in the list', () => {
    expect(newList.includes(3)).toEqual(true);
  });

  test('Search for a value that does not exists in the list', () => {
    expect(newList.includes(7)).toEqual(false);
  });

  test('Test toString and reveal all the items in the list', () => {
    expect(newList.toString()).toEqual('4 4 3 2 1 ');
  });

  test('Test that remove() removes an item from the list', () => {
    expect(newList.remove(1)).toEqual(4);
    expect(newList.toString()).toEqual('4 3 2 1 ');
  });

  test('Can successfully add a node to the end of the linked list', () => {
    newList.append(0);
    expect(newList.toString()).toEqual('4 3 2 1 0 ');
  });

  test('Can successfully add multiple nodes to the end of a linked list', () => {
    newList.append(-1);
    newList.append(-2);
    newList.append(-3);
    expect(newList.toString()).toEqual('4 3 2 1 0 -1 -2 -3 ');
  });

  test('Can successfully insert a node before a node located i the middle of a linked list', () => {
    newList2.insertBefore(2, 20);
    expect(newList2.toString()).toEqual('4 3 20 2 1 ');

  });

  test('Can successfully insert a node before the first node of a linked list', () => {
    newList2.insertBefore(4, 10);
    expect(newList2.toString()).toEqual('10 4 3 20 2 1 ');
  });

  test('Can successfully insert after a node in the middle of the linked list', () => {
    newList2.insertAfter(2, 7);
    expect(newList2.toString()).toEqual('10 4 3 20 2 7 1 ');
  });

  test('getFromEnd(k) can find the kth value from the end of the list', () => {
    expect(list.getFromEnd(2)).toEqual(3);
  });

  test('getFromEnd(k) Where k is greater than the length of the linked list', () => {
    expect(list.getFromEnd(20)).toEqual('k is invalid');
  });

  test('getFromEnd(k) Where k and the length of the list are the same', () => {
    expect(list.getFromEnd(6)).toEqual('k is invalid');
  });

  test('getFromEnd(k) Where k is not a positive integer', () => {
    expect(list.getFromEnd(-1)).toEqual('k is invalid');
  });

  test('getFromEnd(k) Where the linked list is of a size 1', () => {
    let oneElList = new linkedList();
    oneElList.insertAtHead(10);
    expect(oneElList.getFromEnd(1)).toEqual('k is invalid');

  });

  test('reverse() for a list', () => {
    expect(list.toString()).toEqual('6 5 4 3 2 1 ');
    list.reverse();
    expect(list.toString()).toEqual('1 2 3 4 5 6 ');
  });

  test('reverse() for a null list', () => {
    let nullList = new linkedList();

    expect(nullList.reverse()).toEqual('List is Empty');
  });

});