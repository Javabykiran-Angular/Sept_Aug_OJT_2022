//fat arrow function /Arrow function
// it is advanced version anonymous 

   let temp1= ()=>{
        console.log("fat arrow function is called...")
    }

    // temp1();

   let temp2= (a:number,b:number):number=>{
        return (a+b);
    }

    let res=temp2(2,3);
    console.log('Result is '+res);