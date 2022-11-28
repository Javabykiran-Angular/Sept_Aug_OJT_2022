//Functions that return multiple values (JS interview Question)

    function Operation(a:number,b:number){
        return [a+b,a-b,a*b]
    }

    let [add,sub,mul]=Operation(5,3);

    console.log(`
        Addition  = ${add}
        Substraction= ${sub}
        Multiplication= ${mul}
    `)