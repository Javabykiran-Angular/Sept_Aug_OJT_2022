import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strData:string='Hopes so u r enjoying angular 12 Module';

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande',
    country:{
      cname:'India'
    }
  }

    sendMessage:string='';

    @Input() appDate:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onSend(msg:string){
      this.sendMessage=msg;
  }

}
