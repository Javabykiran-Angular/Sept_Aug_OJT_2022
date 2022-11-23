
//Functions
// 1 function without parameter & without return type
// 2 function with parameter & without return type
// 3 function without parameter & with return type
// 4 function with parameter & with return type

// 1 function without parameter & without return type

function add1(){
    console.log("First type of function is called...")
   
}

// add1();

// 2 function with parameter & without return type

    function add2(a:number,b:number){
        console.log("Addition is "+(a+b))
    }

    // add2(2,3);

// 3 function without parameter & with return type

    function add3():number{
        return (8+8);
    }

    // let temp=add3();
    // console.log("Temp is "+temp)

// 4 function with parameter & with return type

    function add4(a:number,b:number):number{
        return (a+b)
    }
    
    
    console.log(` Addition is ${add4(4,6)}`);