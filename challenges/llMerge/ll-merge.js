'use strict'

const LinkedList = require('../../Data-Structures/linkedList/linked-list');

function llmerge(list1, list2){
    let current1 = list1.head;
    let current2 = list2.head;

    if(!current1 && current2){
        return list2;
    } else if (current1 && !current2){
        return list1;
    } else if (!current1 && !current2){
        return 'Both Lists are Empty'
    }

    while(current1 && current2){
        let next1 = current1.next;
        let next2 = current2.next;

        current1.next = current2;

        if(!next2){
            current2.next = next1;
            return list1;
        } else if (!next1){
            return list1;
        } else {
            current2.next = next1;
            current1 = next1;
            current2 = next2;
        }
    }

    return list1;
}

module.exports = llmerge;