"use strict";
function calcSupply(age, maxAge, food, foodPerDay) {
    var result = (maxAge - age) * 365 * foodPerDay;
    console.log(result + "kg of " + food + " would be enough until I am " + maxAge + " years old.");
}