"use strict";
function evaluateAndPrint() {
    var input = document.getElementById('inputBox').value;
    console.log("input = " + input);
    var result = eval(input);
    document.getElementById('resultBox').innerHTML = String(result);
    console.log("result = " + result);
}
