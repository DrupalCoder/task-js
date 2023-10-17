// functions declare

// function singHappybrithday(){
//     console.log("happy brith day to you .....");
// }

// functions Expression
// dono same kaam karan gay

// let singHappybrithday = function(){
//     console.log("happy brith day to you .....");
// }

// singHappybrithday();

// conver to arrow funtion
let singHappybrithday = () => {
    console.log("happy brith day to you .....");
}


// sum three numers 

// function sumthreenumbers(no1,no2,no3){
//     return no1 + no2 + no3;
// }
// console.log(sumthreenumbers(1,2,3));


// convert into funtions expression
// const sumthreenumbers = function(no1,no2,no3){
//     return no1 + no2 + no3;
// }

// const nuvalue = sumthreenumbers(5,5,5);
// console.log(nuvalue);


// convert funtions expression into arrow function
const sumthreenumbers = (no1,no2,no3) => {
    return no1 + no2 + no3;
}



// const isEven = function(number){
//     return    number % 2 === 0;   
// }
// conver to arrow funtion


const isEven = (number) => {
    return    number % 2 === 0;   
}

console.log(isEven(8))


// find the first chracter of string

let anystring = findindex => findindex[0];

console.log(anystring("waqar"));
