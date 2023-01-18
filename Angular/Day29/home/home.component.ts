import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from './../model/employee';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { DialogService } from '../utility/dialog.service';
import { ToastrService  } from 'ngx-toastr';

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
  p:number=1;
  nameSearch:string='';

  config = {
    animated: true,
    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };
  
  constructor(private service:HttpService,
    private modalservice:BsModalService,
    private dialogservice:DialogService,
    private toaster:ToastrService) { }

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
      // alert("Please Select record to update...");
      this.toaster.error("Please Select record to update...");
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

  onDelete(){
    if(this.isradioClick()){
      //record delete 
      this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
      .afterClosed()
      .subscribe((res)=>{
        // console.log(res);
        if(res){
          //delete a record
            this.service.DeleteRecord(this.empobj.id)
            .subscribe((response)=>{
              // console.log(response);
              this.toaster.success(response);
              this.GetEmpData();
            })
        }else{

        }
      })
    }else{
      // alert("Please select a record to delete...");
      this.toaster.warning("Please select a record to delete...");
    }
  }

}
