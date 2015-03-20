"use strict";
var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
];
function findYoungestPerson(array) {
    var smartphonePeople = [];
    for (var i in array) {
        if (array[i].hasSmartphone === true) {
            smartphonePeople.push(array[i]);
        }
    }
    smartphonePeople.sort(function (a, b) {
        return a.age - b.age;
    });
    var youngest = smartphonePeople[0];
    console.log('The youngest person is ' + youngest.firstname + ' ' + youngest.lastname);
    return youngest;
}