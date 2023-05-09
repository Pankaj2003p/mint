const hamburger = document.querySelector(".hamburger");
const listmenu = document.querySelector(".nav-listmenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("submit");
    listmenu.classList.toggle("submit")
})

document.querySelectorAll(".item").forEach(n =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("submit");
        listmenu.classList.remove("submit")
    }))

const singUpButton = document.querySelectorAll(".sign-up");
const signUpFrom = document.querySelector(".signup-from");

singUpButton.forEach(n =>
    n.addEventListener("click", () => {
        signUpFrom.classList.toggle("signUp");
    }))


const signUpFroM = document.querySelector(".signup-fromleyout");
const inputValue = document.querySelectorAll(".signup-item");

signUpFroM.addEventListener("submit", (e) => {
    e.preventDefault();
    inputValue.forEach(n => {
        console.log(n.value);
        n.value = "";
    })
    signUpFrom.classList.toggle("signUp");
})

const loginbutton = document.querySelector(".Log-in");
const loginFrom = document.querySelector(".login-from");

loginbutton.addEventListener("click", () => {
    loginFrom.classList.toggle("login");
})

const fromleyout = document.querySelector(".login-fromleyout");
const inputValues = document.querySelectorAll(".login-item");

fromleyout.addEventListener("submit", (e) => {
    e.preventDefault();
    inputValues.forEach(p => {
        console.log(p.value);
        p.value = "";
    })
    loginFrom.classList.toggle("login");
})

const questionButton = document.querySelector(".question");
const questionForm = document.querySelector(".question-from");
questionButton.addEventListener("click",()=>{
    questionForm.classList.toggle("new-questionform");
})

const suubmitForm = document.querySelector(".question-fromleyout");
const inputquestion = document.querySelectorAll(".input-question");
suubmitForm.addEventListener("submit",e=>{
    e.preventDefault()
    inputquestion.forEach(n=>{
        console.log(n.value);
        n.value = "";
    })
    questionForm.classList.toggle("new-questionform");
})

