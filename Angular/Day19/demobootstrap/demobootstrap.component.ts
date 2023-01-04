import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {


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

}
