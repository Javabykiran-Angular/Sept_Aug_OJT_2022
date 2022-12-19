import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Output() ChildStrEvent=new EventEmitter();

   @Output() ChildArrObjEvent=new EventEmitter();

   @Output() ChildSendMessageEvent=new EventEmitter();

  strData:string='Anular 12';
  
  arrProduct=[
    {
      name:'Motorola',
      price:30000,
      qty:2
    },
    {
      name:'OnePlus',
      price:35000,
      qty:5
    },
    {
      name:'Samsung',
      price:25000,
      qty:10
    },
    {
      name:'Realme',
      price:15000,
      qty:20
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.ChildStrEvent.emit(this.strData)
    this.ChildArrObjEvent.emit(this.arrProduct);
  }

  onSendMsg(msg:string){
      this.ChildSendMessageEvent.emit(msg);
  }

}
