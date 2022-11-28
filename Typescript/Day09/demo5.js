//Simple Json Object
//java script object notation
//key & value format 
var jsonObj = {
    kuchbhi: 9,
    "fname": "Sumit",
    lname: "Raokhande"
};
//1 using dot operator
//2 using square operator
//1 using dot operator
// console.log(`
//     Kuch Bhi = ${jsonObj.kuchbhi}
//     First Name = ${jsonObj.fname}
//     Last name = ${jsonObj.lname}
// `)
//2 using square operator
console.log("\n---------------------\n    Kuch Bhi = ".concat(jsonObj["kuchbhi"], "\n    First Name = ").concat(jsonObj["fname"], "\n    Last name = ").concat(jsonObj['lname'], "\n"));
