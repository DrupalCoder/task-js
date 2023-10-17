// object / nested destructuring object

const users = [
    {userId : 1, fname : "harshit", gender : "male"},
    {userId : 2, fname : "manav", gender : "male"},
    {userId : 3, fname : "harray", gender : "male"},
]
// [{<-- middle brakets use kr rhay han agr object destructuring ha to -->}]
const [{fname : user1fname, userId}, ,{fname : user3fname, userId : user3id}] = users;

console.log(user1fname);
console.log(user3fname);
console.log(user3id);
