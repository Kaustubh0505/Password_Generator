
const passwordbox=document.getElementById("password")

let capletters="QWERTYUIOPLKJHGFDSAZXCVBNM";
let smallletters="qwertyuiopasdfghjklzxcvbnm";
let num="63745890312";
let spechar="!@#$%^&*()_+=-{}[]:;.,?/><|\~"

let allchars = capletters + smallletters + num + spechar;

const length = 12

function createPassword(){
    password=""
    password+=capletters[Math.floor(Math.random()*capletters.length)]
    password+=smallletters[Math.floor(Math.random()*smallletters.length)]
    password+=num[Math.floor(Math.random()*num.length)]
    password+=spechar[Math.floor(Math.random()*spechar.length)]
    
    while(length > password.length){
        password+=allchars[Math.floor(Math.random()*29)]
    }
    passwordbox.value=password

}
function copypassword(){
    passwordbox.select();
    document.execCommand("copy");
    }