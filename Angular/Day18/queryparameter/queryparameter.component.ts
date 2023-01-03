import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';
import { MyQueryParam } from '../utility/queryinterface';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  myjson=<MyQueryParam>{};

  datareceived:string='';
  
  constructor(private route:ActivatedRoute,
              private notify:NotificationService) { }

  ngOnInit(): void {
    this.getDataFromUrl();
    this.notify.notifications
    .subscribe((data)=>{
      this.datareceived=data;
    })
  }
  getDataFromUrl(){
      this.route.queryParamMap
      .subscribe((param:any)=>{
          this.myjson.id=+param.get("id");
          this.myjson.fname=param.get("fname");
          this.myjson.role=param.get("role");
      })
  }

  onSend(msg:string){
      this.notify.SendMessage(msg);
  }

}
