import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, aliquam odio perferendis rem corporis explicabo quas quasi, suscipit alias facilis deleniti quaerat qui est minima deserunt. Quod neque quasi deleniti.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, aliquam odio perferendis rem corporis explicabo quas quasi, suscipit alias facilis deleniti quaerat qui est minima deserunt. Quod neque quasi deleniti.'
  constructor() { }

  ngOnInit(): void {
  }

}
