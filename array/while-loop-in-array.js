// while loop in array

// .length-1 ya array k last element tak la jata ha

let fruits = ["apple","banana","mango","orange"];
let fruits2 = [];
let i = 0;
while(i<fruits.length-1){
    console.log(fruits[i]);
    fruits2.push(fruits[i].toUpperCase());
    i++
}

console.log(fruits2);