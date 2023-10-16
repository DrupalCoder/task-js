let fdiv = document.getElementById("one");
let sdiv = document.getElementById("two");
let tdiv = document.getElementById("three");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function(){
    fdiv.style.color = "green";
});
btn2.addEventListener("click", function(){
    sdiv.style.color = "red";
});
btn3.addEventListener("click", function(){
    tdiv.style.color = "blue";
});

