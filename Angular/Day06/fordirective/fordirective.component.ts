import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

    course:string[]=['Core java','Advanced Java','Spring Boot','JSP','Angular 12','Jenkings','Docker','AWS'];


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

    selected:string='';

    
  constructor() { }

  ngOnInit(): void {
  }

  onmouseOver(myitem:any){
    console.log("Mouse over event occur..");
    this.selected=myitem.name;
  }

  onMouseOut(){
    this.selected='';
  }

}
