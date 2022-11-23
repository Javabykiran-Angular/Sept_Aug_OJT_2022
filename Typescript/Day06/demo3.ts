//anonymous function
// function does not hv any name 

    let temp=function (){
        console.log("First Type anonymous function is called ");
    }
    
    // temp();

      let temp2=  function (a:number,b:number):number{
            return (a+b);
        }

        let res=temp2(7,10);
        console.log("Result is "+res)