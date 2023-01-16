import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from './../model/employee';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit {

  @Input() parentdata:Employee=<Employee>{};
  allCountry:any[]=[];

  issubmitDissabled:boolean=true;
  backendResponse:string='';
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.getAllCountry();
  }

  getAllCountry(){
      this.service.getAllCountry()
      .subscribe((response:any)=>{
          this.allCountry=response;
      })
  }

  onupdate(){
    this.parentdata.updatedby=sessionStorage.getItem("username");
    this.parentdata.updateddtm=Date.now();
    this.service.UpdateRecord(this.parentdata)
    .subscribe((response)=>{
      this.backendResponse=response;
      this.issubmitDissabled=false;
    })


  }

}
