"use strict";
exports.__esModule = true;
exports.pi = exports.add = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(id, fname, lname) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        // console.log(role);
    }
    Myclass.prototype.display = function () {
        console.log("\n            ID        :: ".concat(this.id, "\n            First Name:: ").concat(this.fname, "\n            Last Name :: ").concat(this.lname, "\n        "));
    };
    return Myclass;
}());
exports.Myclass = Myclass;
// let obj=new Myclass(9,'Sumit','Raokhande','DevOps');
// obj.display();
function add(a, b) {
    return (a + b);
}
exports.add = add;
exports.pi = 3.14;
