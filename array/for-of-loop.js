// for of loop in array

// .length-1 ya array k last element tak la jata ha

let fruits = ["apple","banana","mango","orange"];
// add into new array
let freshFruits = [];
// let x = 0;

// for(let x of fruits){
//     fruits += x;
//     console.log("this is x",x);
// }
    

for(let fruit of fruits){
    // console.log(fruit.toUpperCase());
    freshFruits.push(fruit.toUpperCase())
}
console.log(freshFruits);