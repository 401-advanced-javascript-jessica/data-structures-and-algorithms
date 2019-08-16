'use strict';

const arrayReverse = (arr) => {
    if (!(typeof arr === 'object' && arr.length > 0)){
        return -1;
    } else {
        for (let i = 0; i < arr.length/2; i++){
            let temp = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
}

module.exports = arrayReverse;