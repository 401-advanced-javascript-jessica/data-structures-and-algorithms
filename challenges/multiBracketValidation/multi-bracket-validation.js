'use strict'

const Stack = require('../../Data-Structures/stacksAndQueues/stacks-and-queues').Stack;

const multiBracketValidation = function (input){
    if (!input) {
        return false;
    }
    if (input.length < 2){
        return false;
    }
    let stack = new Stack();

    for(let i = 0; i < input.length; i++){
        if(input[i] === '{' || input[i] === '(' || input[i] === '['){
            stack.push(input[i]);
        }
        else if (input[i] === '}' || input[i] === ')' || input[i] === ']'){
            let popped
            if(!stack.peek()){
                return false;
            } else {
                popped = stack.pop();
            }
            if (popped === '{' && input[i] !== '}') {
                return false;
            } else if (popped === '(' && input[i] !== ')'){
                return false;
            } else if (popped === '[' && input[i] !== ']'){
                return false;
            }
        }
    }
    return true;
}

module.exports = multiBracketValidation;