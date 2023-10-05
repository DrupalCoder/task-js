// nested if else


// winning number is 19 
// your gues is to low 17
// your gues is to heigh


let winningNumber = 19;

let guesNumber = +prompt("gues a number");

if(winningNumber === guesNumber){
    console.log("your gues is right")
}
else{
    if(winningNumber > guesNumber){
        console.log("your gues is to low")
    }
    else{
        console.log("your guse is to heigh")
    }
}