//optional parameter functions
function add1(a, b) {
    console.log('Value of a is ' + a); //4
    console.log('Value of b is ' + b); //undefined
    console.log('Addition of a+b is ' + (a + b)); //NAN=> not a number
}
// add1(4);
function add2(a, b) {
    console.log('Value of a is ' + a); //undefined
    console.log('Value of b is ' + b); //undefined
    console.log('Addition of a+b is ' + (a + b)); //NAN=> not a number
}
// add2();
//Default parameter functions
function add3(a, b) {
    if (b === void 0) { b = 4; }
    console.log('Value of a is ' + a); //6
    console.log('Value of b is ' + b); //10
    console.log('Addition of a+b is ' + (a + b)); //16
}
// add3(6)
// add3(6,10);
function add4(a, b) {
    if (a === void 0) { a = 5; }
    console.log('Value of a is ' + a); //6
    console.log('Value of b is ' + b); //10
    console.log('Addition of a+b is ' + (a + b)); //16
}
// add4(8,10);
function add5(a, b) {
    if (a === void 0) { a = 5; }
    console.log('Value of a is ' + a); //5
    console.log('Value of b is ' + b); //undefined
    console.log('Addition of a+b is ' + (a + b)); //nan
}
add5();
