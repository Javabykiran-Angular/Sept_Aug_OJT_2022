import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  allCountry:any[]=[];
  constructor(private service:HttpService,
              private router:Router) { }

  ngOnInit(): void {
    this.GetAllCoutry();
  }
  
  GetAllCoutry(){
    this.service.getAllCountry()
    .subscribe((response)=>{
      // console.log(response)
      this.allCountry=(<any>response);
    })
  }
  onSubmit(f:NgForm){
    let obj={
      name:f.value.name,
      phoneno:f.value.phoneno,
      departmentit:f.value.departmentit,
      status:f.value.status,
      country:f.value.country,
      createdby:sessionStorage.getItem("username"),
      createddtm:Date.now(),
      updatedby:sessionStorage.getItem("username"),
      updateddtm:Date.now()
    }

    this.service.addRecord(obj)
    .subscribe((response)=>{
      // console.log(response)
      this.router.navigate(['/home']);
    })

  }

}
