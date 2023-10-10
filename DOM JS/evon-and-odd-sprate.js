
// let myArray = [1,2,3,4,5,6,7,8,9];



// let evenNumber = myArray.filter(newans => newans % 2 === 0);
// let oddNumber = myArray.filter(newans => newans % 2 !== 0);




// console.log(evenNumber);
// console.log(oddNumber);


let myArray = [1,2,3,4,5,6,7,8,9];

let evenNumber = [];
let oddNumber = [];


for(let i = 0; i<myArray.length;i++){

    if(myArray[i] % 2 === 0){
        evenNumber.push(myArray[i]);
    }
    else{
        oddNumber.push(myArray[i]);
    }
}


console.log(evenNumber);
console.log(oddNumber);




