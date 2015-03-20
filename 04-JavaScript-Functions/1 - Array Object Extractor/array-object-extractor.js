"use strict";
var array = [
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1, 2, 3],
    "Gosho",
    { name : 'Penka', height: 1.65}
];
function extractObjects(array) {
    var result = [];
    for (var i in array) {
        if (Object.prototype.toString.call(array[i]) === "[object Object]") {
            result.push(array[i]);
        }
    }
    //console.log(JSON.stringify(result));
    return result;
}