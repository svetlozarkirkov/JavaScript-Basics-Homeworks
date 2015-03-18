"use strict";
function manipulate(arr) {
    
    function isNum(num) {
        return !isNaN(num);
    }

    function mostOccurring(arr) {
        var mf = 1;
        var m = 0;
        var item;
        for (var i = 0; i < arr.length; i++)
        {
            for (var j = i; j < arr.length; j++)
            {
                if (arr[i] === arr[j]) {
                    m++;
                }
                if (mf < m)
                {
                    mf = m;
                    item = arr[i];
                }
            }
            m = 0;
        }
        return item;
    }

    var filtered = [];
    
    for (var i in arr){
        if(isNum(arr[i])){
            filtered.push(arr[i]);
        }
    }
    
    filtered.sort(function(a, b){return b-a;});
    var min = Math.min.apply(null, filtered);
    var max = Math.max.apply(null, filtered);
    var mostFreq = mostOccurring(filtered);
    console.log('Min number: ' + min);
    console.log('Max number: ' + max);
    console.log('Most frequent number: ' + mostFreq);
    console.log(filtered);
}