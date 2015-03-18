"use strict";
function gradeScaling(input) {
    for (var i in input) {
        var score = input[i].score;
        input[i].score = score + (score*10/100);
        if (input[i].score >= 100) {
            input[i].hasPassed = true;
        }
        else {
            input[i].hasPassed = false;
        }
    }
    var filtered = input.filter(function(item) {
        return item.hasPassed;
    });
    filtered.sort(function compare(a,b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    });
    for (var x in filtered) {
        console.log(filtered[x]);
    }
}