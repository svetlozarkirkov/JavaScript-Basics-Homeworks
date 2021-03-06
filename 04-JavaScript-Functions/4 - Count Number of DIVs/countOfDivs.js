"use strict";
function countOfDivs(html) {
    var found = html.match(/^<div[^>]*>|<\/div>/g);
    console.log('divs count --> ' + found.length);
}

//example below

var testHTML = '<!DOCTYPE html><html><head lang="en"> ' +
    '<meta charset="UTF-8"> <title>index</title> ' +
    '<script src="/yourScript.js" defer></script>' +
    '</head><body> <div id="outerDiv"> <div class="first"> ' +
    '<div><div>hello</div></div> </div> <div>hi<div></div>' +
    '</div> <div>I am a div</div> </div></body></html>';

countOfDivs(testHTML);