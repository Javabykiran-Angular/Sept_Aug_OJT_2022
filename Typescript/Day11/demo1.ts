export class Myclass{
  private id:number;
  public fname:string;
 protected lname:string;

        constructor(id:number,fname:string,lname:string){
            this.id=id;
            this.fname=fname;
            this.lname=lname;
            // console.log(role);
        }
       

     display(){
        console.log(`
            ID        :: ${this.id}
            First Name:: ${this.fname}
            Last Name :: ${this.lname}
        `)
    }

}

// let obj=new Myclass(9,'Sumit','Raokhande','DevOps');
// obj.display();

export function add(a:number,b:number){
    return (a+b);
}

export const pi=3.14;
