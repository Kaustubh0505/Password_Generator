function get() {
    let a = document.getElementById("input").value;
    return a;
}

const passwordbox = document.getElementById("password");

let capletters = "QWERTYUIOPLKJHGFDSAZXCVBNM";
let smallletters = "qwertyuiopasdfghjklzxcvbnm";
let num = "63745890312";
let spechar = "!@#$%^&*()_+=-{}[]:;.,?/><|\\~";

let allchars = capletters + smallletters + num + spechar;

function createPassword() {
    let password = "";
    let length = parseInt(get());

    if (isNaN(length)) {
        alert("Please enter number");
    }
    else if(length==0){
        alert("Number not valid");
    }
    else if(length<0){
        alert("Enter positive number")
    }
    

    else if (length >= 1) {
        password += capletters[Math.floor(Math.random() * capletters.length)];
    }
    else if (length >= 2) {
        password += smallletters[Math.floor(Math.random() * smallletters.length)];
    }
    else if (length >= 3) {
        password += num[Math.floor(Math.random() * num.length)];
    }
    else if (length >= 4) {
        password += spechar[Math.floor(Math.random() * spechar.length)];
    }

    while (password.length < length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    passwordbox.value = password;
}

function copypassword(){
    passwordbox.select();
    document.execCommand("copy");
    }