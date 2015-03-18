"use strict";
function scoreMod(arr) {
    var filtered = [];
    for (var i in arr) {
        if (arr[i] >= 0 && arr[i] <= 400) {
            filtered.push(arr[i] - (arr[i]*20/100));
        }
    }
    filtered.sort(function(a, b){ return a-b; });
    console.log(filtered);
}