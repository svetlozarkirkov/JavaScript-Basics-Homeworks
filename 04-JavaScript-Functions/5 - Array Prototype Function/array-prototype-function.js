"use strict";
Array.prototype.removeItem = function (value) {
    for (var i in this) {
        if(this[i] === value) {
            this.splice(i, 1);
        }
    }
};

//examples below

var arr = ['hi', 'bye', 'hello' ];
console.log('before: ' + JSON.stringify(arr));
arr.removeItem('bye');
console.log('after: ' + JSON.stringify(arr));

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log('before: ' + JSON.stringify(arr));
arr.removeItem(1);
console.log('after: ' + JSON.stringify(arr));