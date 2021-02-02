var body = document.querySelector("body");
var chechkbox = document.querySelector(".checkbox");
var toggle_button = document.querySelector(".toggle-button");
chechkbox.addEventListener("input", ()=>{
    if(!chechkbox.checked)
        body.classList.add("dark");
    else
        body.classList.remove("dark");
});