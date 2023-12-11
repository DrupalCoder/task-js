// rest parameters
// func (1,2,3,4,5,6,7);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}
let ans = addAll(1,2,5,3,4);

console.log(ans);


