
let btn = document.querySelector("button");

let newdiv = document.querySelector(".sabval");

btn.addEventListener("click", function(){
    btn.classList.toggle("active");
    newdiv.classList.toggle("active");
});