import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
sendDate:string='';

DataReceived:string='';

  onSend(mydate:string){
    this.sendDate=mydate;
  }

}
