import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdirective',
  templateUrl: './switchdirective.component.html',
  styleUrls: ['./switchdirective.component.css']
})
export class SwitchdirectiveComponent implements OnInit {

  choice:string='';
  isHidden:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  onSend(colorname:string){
      this.choice=colorname.toLowerCase().trim();
      // console.log(this.choice);
      if(this.choice==='red'||'green'||'blue'){
          this.isHidden=true;
          // console.log("if statement "+this.isHidden);
      }else{
        this.isHidden=false;
        // console.log("Else statement"+this.isHidden);
      }
  }

}
