import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

    dataReceived:string='';
  constructor(private service:NotificationService) { }

  ngOnInit(): void {
    this.service.notifications
    .subscribe((data)=>{
      this.dataReceived=data;
    })
  }

}
