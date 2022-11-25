//foreach
var a1 = [2, 4, 7, 9];
// a1.forEach((myvalue,i)=>{
//     console.log("Value is "+myvalue+" Index is "+i)
// });
//rest parameter functions
function display(a) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log("\n            a = ".concat(a, "\n            item is ").concat(item, "\n        "));
}
// display("Sumit",44,56,99);
//Push & pop
// LIFO => Last in First Out 
//u add data dynamically but that data will add at the last 
var a2 = [];
// a2.push(45);
// console.log(a2);
// a2.push(78,90.60,100);
// console.log(a2);
// let res=a2.pop()
// console.log(a2);
// console.log("Poped data is "+res);
//Splice
// let a3:number[]=[22,12,45,60,90];
// console.log(a3);
// a3.splice(2,0,200);
// console.log(a3);
// a3.splice(3,0,700,900);
// console.log(a3);
// a3.splice(5,1);
// console.log(a3)
// a3.splice(3,2);
// console.log(a3);
// a3.splice(1,1,500);
// console.log(a3);
// a3.splice(3,1,80,400);
// console.log(a3);
//slice
// it is used to copy a section of data from array & return a new array
var str = ['Core Java', 'Advanced Java', 'Spring Boot', 'JSP', 'Angular 12', 'AWS', 'Docker'];
// let copiedarr=str.slice(1,5);
// console.log("Original array "+str);
// console.log("Copied Array "+copiedarr);
// let temp1=str.slice(1);
// console.log("Copied Array "+temp1)
// let temp2=str.slice();
// console.log("Copied Array "+temp2);
//map
var a4 = [2, 3, 4, 5, 6];
var res = a4.map(function (value) {
    return (value * value);
});
console.log(a4);
console.log(res);
