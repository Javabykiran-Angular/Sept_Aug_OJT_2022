import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

    username:string='Default username...';

  constructor() { }

  ngOnInit(): void {
  }

  onShow(){
    alert("Welcome "+this.username);
  }

}
