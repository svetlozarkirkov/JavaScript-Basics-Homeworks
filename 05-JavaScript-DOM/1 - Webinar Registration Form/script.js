'use strict';
function invoiceFunc() {
    var i = 0;
    var checkbox = document.getElementById('invoiceCheckbox');
    var invoiceItems = document.getElementsByClassName('invoice-section');
    var status = checkbox.checked;
    if (status) {
        for (i in invoiceItems) {
            invoiceItems[i].style.display = 'inline-block';
        }
    }
    else {
        for (i in invoiceItems) {
            invoiceItems[i].style.display = 'none';
        }
    }
}