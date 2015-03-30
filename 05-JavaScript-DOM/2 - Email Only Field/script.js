function validateEmail(email) {
    var emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return emailPattern.test(email);
}
function checkEmail() {
    var input = document.getElementById("emailField").value;
    document.getElementById("emailValidate").innerHTML = input;
    if (validateEmail(input)){
        document.getElementById("emailValidate").style.backgroundColor = "lightgreen";
    }
    else {
        document.getElementById("emailValidate").style.backgroundColor = "red";
    }
}