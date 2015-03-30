'use strict';
function createParagraph(id, text) {
    var paragraph = document.createElement("p");
    var paragraphText = document.createTextNode(text);
    paragraph.appendChild(paragraphText);
    var divToWrite = document.getElementById(id);
    divToWrite.appendChild(paragraph);
}

// example below

createParagraph('wrapper', 'This is the created paragraph');