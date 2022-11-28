//destructing/derefrence of array 

let a:number[]=[2,3,5,6];

let [t1,t2,t3,t4]=a;

// console.log(`
//     t1=${t1}
//     t2=${t2}
//     t3=${t3}
//     t4=${t4}
// `)

let [s1,...arr]=a;
console.log(`
    s1=${s1}
    arr= ${arr}
`)