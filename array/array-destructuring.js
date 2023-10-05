// array destructuring

let myarray = ["mango","apple","banana","orange"];

// let fruitF = [];
// fruitF.push(myarray[0]);
// console.log(fruitF)

// let fruitS = [];
// fruitS.push(myarray[1]);

// console.log(fruitS);
// let k bad [array1,array2] first variable index 1 value store kr la ga or second variable index 2 value store kr la ga  (...nameofvariable baki is ma store ho jayaan ga)

// let [array1,array2] = myarray;
let [array1,array2,...array3] = myarray;
console.log("this is array three",array3)
console.log(array1.toUpperCase());

