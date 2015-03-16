"use strict";
function convertToKnots(kmh) {
    var result = kmh * 0.539956803;
    result = result.toFixed(2);
    console.log("knots = " + result);
}