// Shallow Copy & deep Copy (Js Interview Question)
//by default variable is deep copy
let a=10;
let b=a;

// console.log(`
//     a=${a}
//     b=${b}
// `)
// b=20;
// console.log(`
//     a=${a}
//     b=${b}
// `)

//by default array is shallow copy
let arr=[20,30,40,50];
let arr1=arr;

// console.log(`
//     arr = ${arr}
//     arr1= ${arr1}
// `)

// arr1[0]=100;

// console.log(`
//     arr = ${arr}
//     arr1= ${arr1}
// `)

let [...arr2]=arr;

console.log(`
    arr = ${arr}
    arr2= ${arr2}
`)

arr2[0]=500

console.log(`
    arr = ${arr}
    arr2= ${arr2}
`)