import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    myid:number=9;
    myusername:string='Sumit-Raokhande';

    jsonObj={
      id:8,
      fname:"Sumit",
      role:'DevOps'
    }

  constructor() { }

  ngOnInit(): void {
  }

}
