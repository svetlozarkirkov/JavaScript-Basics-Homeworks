'use strict';
function HTMLGenerator() {
    HTMLGenerator.prototype.createParagraph = function (id, text) {
        var paragraph = document.createElement("p");
        var paragraphText = document.createTextNode(text);
        paragraph.appendChild(paragraphText);
        var parent = document.getElementById(id);
        parent.appendChild(paragraph);
    };
    HTMLGenerator.prototype.createDiv = function (id, className) {
        var parent = document.getElementById(id);
        var newDiv = document.createElement("div");
        newDiv.className = className;
        parent.appendChild(newDiv);
    };
    HTMLGenerator.prototype.createLink = function (id, text, url) {
        var parent = document.getElementById(id);
        var link = document.createElement("a");
        var linkText = document.createTextNode(text);
        link.appendChild(linkText);
        link.href = url;
        parent.appendChild(link);
    };
}

//examples below

var HTMLGen = new HTMLGenerator();
HTMLGen.createParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');