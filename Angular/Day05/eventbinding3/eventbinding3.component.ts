import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {

  result!:number;
  name!:string;
  age:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onKeyup(){
    console.log("Key Up event Occur..")
  }

  onKeydown(){
    console.log("Key down event Occur..")
  }

  onEnterKey(){
    console.log("enter key Event Occur...")
  }

  onSend(mydate:any){
    console.log(mydate)
    let temp=(<string>mydate);
   let temp2= temp.split('-')
   console.log(temp2)
    this.age=2022-(+temp2[0]);
  }

}
