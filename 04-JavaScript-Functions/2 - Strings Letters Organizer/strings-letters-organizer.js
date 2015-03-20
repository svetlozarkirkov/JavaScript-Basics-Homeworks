"use strict";
function sortLetters(string, boolean) {
    var split = string.split('');
    console.log(split);
    var result;
    if (boolean === true) {
        split.sort(function (a, b) {
            var x = a.toLowerCase(), y = b.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        result = split.join('');
        return result;
    }
    else {
        split.sort(function (a, b) {
            var x = a.toLowerCase(), y = b.toLowerCase();
            return x > y ? -1 : x < y ? 1 : 0;
        });
        result = split.join('');
        return result;
    }
}