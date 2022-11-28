//Swapping variables without using 3rd variables (Js interview Question)
// 1 Addition & subtraction
// 2 Division & substraction
// 3 xor
// 4 using drefencing of array
var _a;
var a = 10;
var b = 20;
console.log("\n    swapping Before the value\n    a=".concat(a, "\n    b=").concat(b, "\n"));
_a = [b, a], a = _a[0], b = _a[1];
console.log("\n    swapping after the value\n    a=".concat(a, "\n    b=").concat(b, "\n"));
