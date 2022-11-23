//anonymous function
// function does not hv any name 
var temp = function () {
    console.log("First Type anonymous function is called ");
};
// temp();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(7, 10);
console.log("Result is " + res);
