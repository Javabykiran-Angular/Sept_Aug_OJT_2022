import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from './../model/employee';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empData:any[]=[];
  radioSelect:boolean=false;
  empobj=<Employee>{};
  modalRef!: BsModalRef;  

  config = {
    animated: true,
    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };
  
  constructor(private service:HttpService,
    private modalservice:BsModalService) { }

  ngOnInit(): void {
    this.GetEmpData();  
      
  }

  GetEmpData(){
    this.service.getRecord()
    .subscribe((response)=>{
      // console.log(response);
      this.empData=(<any>response);
    })
  }

  onUpdate(popup:TemplateRef<any>){
    if(this.isradioClick()){
      //update logic      
    this.modalRef = this.modalservice.show(popup, this.config);
      

    }else{
      alert("Please Select record to update...");
    }

  }

  isradioClick(){
    if (this.radioSelect)
    return true;
    else
    return false;

  }

  onEdit(emp:any){
    // console.log(emp);
    this.radioSelect=true;
    this.empobj=emp;
  }

}
