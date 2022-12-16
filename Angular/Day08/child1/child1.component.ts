import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() parentStrData!:string;

  @Input() ParentJsonData={
    id:0,
    fname:'',
    lname:'',
    country:{
      cname:''
    }
  };

  @Input() AppCompDate:string=''

  @Input() ParesntMessage:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
