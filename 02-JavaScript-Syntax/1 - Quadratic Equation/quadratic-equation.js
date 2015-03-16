"use strict";
function solveQuadratic(a, b, c) {
    var sqrtpart = b * b - 4 * a * c;
    var x, x1, x2;
    if (sqrtpart > 0){
        x1 = (-b - Math.sqrt(sqrtpart)) / (2 * a);
        x2 = (-b + Math.sqrt(sqrtpart)) / (2 * a);
        console.log("x1 = " + x1 + "\nx2 = " + x2);
    }
    else if (sqrtpart < 0) {
        console.log("No real roots");
    }
    else {
        x = (-b + Math.sqrt(sqrtpart)) / (2 * a);
        console.log("x = " + x);
    }
}
var promptA = window.prompt("Enter number for \"a\"");
var numA = parseFloat(promptA);
console.log("a = " + numA);
var promptB = window.prompt("Enter number for \"b\"");
var numB = parseFloat(promptB);
console.log("b = " + numB);
var promptC = window.prompt("Enter number for \"c\"");
var numC = parseFloat(promptC);
console.log("c = " + numC);

solveQuadratic(numA, numB, numC);