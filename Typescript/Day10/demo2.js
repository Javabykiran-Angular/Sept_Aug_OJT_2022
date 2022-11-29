var Myclass = /** @class */ (function () {
    function Myclass(id, fname, lname, role) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        console.log(role);
    }
    Myclass.prototype.display = function () {
        console.log("\n            ID        :: ".concat(this.id, "\n            First Name:: ").concat(this.fname, "\n            Last Name :: ").concat(this.lname, "\n        "));
    };
    return Myclass;
}());
var obj = new Myclass(9, 'Sumit', 'Raokhande', 'DevOps');
obj.display();
