
// console.log("Welcome to Angular");
// console.log('Welcome to Angular');
// console.log(`
//         U r study Angular module`)

var a1,a2,a3;
var a_1,a$1;

//data types
// number(int,long,double,short,float),string(''/""),boolean(true/false)
//any(number,string,boolean)
//void (it is neutral data type => it does not point anything)
// misec. null(object) & undefined(variable)=> it is used as value as data type of variable 

var b1:number=10; //forward declaration & defination

// console.log('Value of b1 '+b1)
// console.log(`Value of b1 ${b1}`);
// var b2!:number;
// console.log("Value of b2 "+b2);
// var str!:string;
// console.log("Value of str "+str);
var b3!:any;
b3=2.5;
// console.log('Value of b3 is '+b3)
b3='Sumit';
// console.log('Value of b3 is '+b3)
b3=true;
// console.log('Value of b3 is '+b3)

var b4;

//literal
var b5:number | string;
b5=3.14;
b5='Sumit';
// b5=true;

var b6!:100|string | undefined;
// b6=50;
// console.log("b6 "+b6);


// Type Assertion

    var c1:any;

    //1 Angle Bracket => we used in ts file 
    //2 as syntax  => view file=> .html file
    
     //1 Angle Bracket

    var temp=(<string>c1);
    // temp.

 //2 as syntax 
   var temp2=(c1 as string);
    // temp2.


//Operators
//Airthmathic => +,-,*,/,%
// logical => &&, ||,!
// bitwise => &,|,~,<<,>>,^
// conditional & relational => <,>,>=,<=,==(it checks only value),!=,===(strongly equality=> it checks data type as well as value)
// unary => inc/dec => post/pre ++a,a++;
// ternary => condition?expression1:expression2
//assignment => =,+=,-=,/=,*=,%=

