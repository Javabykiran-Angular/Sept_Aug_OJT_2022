//Swapping variables without using 3rd variables (Js interview Question)
// 1 Addition & subtraction
// 2 Division & substraction
// 3 xor
// 4 using drefencing of array

let a=10;
let b=20;

console.log(`
    swapping Before the value
    a=${a}
    b=${b}
`);

[a,b]=[b,a];
console.log(`
    swapping after the value
    a=${a}
    b=${b}
`)