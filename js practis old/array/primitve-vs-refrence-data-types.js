// primitve vs refrence data types
//clone array 
// concat two arrays

let array1 = ["item1","item2","this array 1"];
let array2 = array1.slice(0); // clone array 0 index sa end tak
console.log(array1)
console.log(array2)


let array3 = [].concat(array1); // concat array
console.log("this is array 3",array3);

// new way
// spread array ...nameOfArray

let array4 = [...array1];
console.log(array4);



let first = ["f value"];
let second = ["s value"];
let third = ["t value"];

let anotherarray = [...first,...second,...third,"this is appple","this is orange"];
console.log(anotherarray);


let array5 = array1.slice(0).concat("item5","item6");
console.log(array5);
