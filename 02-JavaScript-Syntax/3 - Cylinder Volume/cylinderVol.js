"use strict";
function calcCylinderVol(arr) {
    var r = arr[0];
    var h = arr[1];
    var volume = Math.PI * r * r * h;
    console.log(volume.toFixed(3));
}