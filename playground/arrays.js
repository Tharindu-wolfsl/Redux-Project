let numbers = [1, 2, 3];
//add numbers
let added1 = [...numbers, 4];
let added2 = [4, ...numbers];
let index = numbers.indexOf(2);
let added3 = [...numbers.slice(0,index), 4, ...numbers.slice(index)];

console.log("added1: " + added1);
console.log("added2: " + added2);
console.log("added3: " + added3);

//remove number
let removed = numbers.filter(n => n!=2);
console.log("removed:" + removed);

//update number
let updatedArr = numbers.map(n => n === 2 ? 20 : n);
console.log("updated:" + updatedArr);
