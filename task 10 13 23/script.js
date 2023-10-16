let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){

    if(input.value === ''){
        alert("the value is empty")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;

        ul.append(li);

        input.value = '';
        input.focus();
    }
});