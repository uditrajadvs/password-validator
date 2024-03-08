// Empty JS file
console.log("Hello");
const password = document.getElementById("password");
const rule1 = document.getElementById("rule1");
const rule2 = document.getElementById("rule2");
const rule3 = document.getElementById("rule3");
const rule4 = document.getElementById("rule4");
const rule5 = document.getElementById("rule5");

const varified = document.getElementById("varified");

const pv = password.value;
let flag = true;
function PasswordValidator(event) {
    const data = event;
    // document.getElementById("varified").innerText=data;
    if (data.length >= 8) {
        rule1.classList.remove("red-line");
        rule1.classList.add("green-line");
        flag=true;
    }
    else {
        rule1.classList.remove("green-line");
            rule1.classList.add("red-line");
         flag = false; }


    for (let i = 0; i < data.length; i++) {
        if (data[i] === data[i].toUpperCase() && data[i] != data[i].toLowerCase()) {
            rule2.classList.remove("red-line");
            rule2.classList.add("green-line");
            flag=true;
            break;
        }
        else { 
            rule2.classList.remove("green-line");
            rule2.classList.add("red-line");
            flag = false; }
    }


    for (let i = 0; i < data.length; i++) {
        if (data[i] === data[i].toLowerCase() && data[i] != data[i].toUpperCase()) {
            rule3.classList.remove("red-line");
            rule3.classList.add("green-line");
            flag=true;
            break;
        }
        else { 
            rule3.classList.remove("green-line");
            rule3.classList.add("red-line");
            flag = false; }
    }


    for (let i = 0; i < data.length; i++) {
        if (!isNaN(data[i] * 1)) {
            rule4.classList.remove("red-line");
            rule4.classList.add("green-line");
            flag=true;
            break;
        }
        else { 
            rule4.classList.remove("green-line");
            rule4.classList.add("red-line");
            flag = false; }
    }

    if (/[!@#$%^&*()_+{}\[\]:;<>,.?~]/.test(data)) {
        rule5.classList.remove("red-line");
        rule5.classList.add("green-line");
        flag=true;
    }
    else
    {
        rule5.classList.remove("green-line");
            rule5.classList.add("red-line");
        flag = false;
    }
}


function check() {
    const result = document.getElementById("alertbox");
    if (flag) {
        result.innerHTML = "Password is valid";
        result.classList.remove("invalid");
        result.classList.add("valid");
    }
    else {
        result.innerHTML = "Password is invalid";
        result.classList.remove("valid");
        result.classList.add("invalid");
    }
}

