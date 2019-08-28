'use strict'

const LinkedList = require('../../../Data-Structures/linkedList/linked-list');
const LLMerge = require('../ll-merge');

describe('Test Merge Two Linked Lists', () => {

    test('Can Merge Two Lists when list one is null', () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();

        list2.append(10);
        list2.append(20);
        list2.append(30);

        expect(LLMerge(list1, list2)).toEqual(list2);
    });

    test('Can Merge Two Lists when list two is null', () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();

        list1.append(1);
        list1.append(2);
        list1.append(3);

        expect(LLMerge(list1, list2)).toEqual(list1);
    });

    test('Can Merge Two Lists when both lists are null', () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();

        expect(LLMerge(list1, list2)).toEqual('Both Lists are Empty');
    });

    test('Can Merge Two Lists of Same Length', () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();

        list1.append(1);
        list1.append(2);
        list1.append(3);

        list2.append(10);
        list2.append(20);
        list2.append(30);

        LLMerge(list1, list2);
        expect(list1.toString()).toEqual('1 10 2 20 3 30 ');
    });

    test('Can Merge Two Lists where list1 is longer than list2', () => {

        let list1 = new LinkedList();
        let list2 = new LinkedList();

        list1.append(1);
        list1.append(2);
        list1.append(3);
        list1.append(4);
        list1.append(5);

        list2.append(10);
        list2.append(20);
        list2.append(30);

        LLMerge(list1, list2);
        expect(list1.toString()).toEqual('1 10 2 20 3 30 4 5 ');
    });

    test('Can Merge Two Lists where list2 is longer than list1', () => {

        let list1 = new LinkedList();
        let list2 = new LinkedList();

        list1.append(1);
        list1.append(2);
        list1.append(3);

        list2.append(10);
        list2.append(20);
        list2.append(30);
        list2.append(40);
        list2.append(50);

        LLMerge(list1, list2);
        expect(list1.toString()).toEqual('1 10 2 20 3 30 40 50 ');
    });


});