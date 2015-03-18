"use strict";
function replaceATag(str) {
    var pattern = /<a([\w\W]*)>([\w\W]*)<\/a>/gi;
    return str.replace(pattern, '[URL$1]$2[/URL]');
}
console.log(replaceATag('<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>'));