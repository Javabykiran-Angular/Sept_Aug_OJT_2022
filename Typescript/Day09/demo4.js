//Functions that return multiple values (JS interview Question)
function Operation(a, b) {
    return [a + b, a - b, a * b];
}
var _a = Operation(5, 3), add = _a[0], sub = _a[1], mul = _a[2];
console.log("\n        Addition  = ".concat(add, "\n        Substraction= ").concat(sub, "\n        Multiplication= ").concat(mul, "\n    "));
