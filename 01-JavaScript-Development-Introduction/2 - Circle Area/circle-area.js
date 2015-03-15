function write(input, result) {
    var paragraph = document.createElement("P");
    var text = document.createTextNode("r = " + input + "; area = " + result);
    paragraph.appendChild(text);
    document.getElementById("content").appendChild(paragraph);
}

function calcArea(r) {
    var result = Math.PI * r * r;
    console.log(result);
    write(r, result);
}

function writeOnHtml() {
    calcArea(7);
    calcArea(1.5);
    calcArea(20);
}