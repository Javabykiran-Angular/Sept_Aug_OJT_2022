import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit,AfterViewInit {

  @ViewChild('mydiv') accessdiv!:ElementRef;

  @ViewChild(Child3Component) childaccess!:Child3Component;

  constructor() { }
 

  ngOnInit(): void {
    console.log(this.accessdiv);
  }

  ngAfterViewInit(): void {
    console.log(this.accessdiv);
    this.accessdiv.nativeElement.className='mydiv';
  }

  onAccessProperty(){
    this.childaccess.username="Sumit Raokhande";
  }

  onAccessMethod(){
      this.childaccess.onShow();
  }

}
