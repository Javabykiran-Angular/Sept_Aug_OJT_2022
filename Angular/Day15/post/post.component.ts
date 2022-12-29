import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id!:number;
  title!:string;
  body!:string;
  isHidden:boolean=true;
  constructor(private service:HttpService) { }

  ngOnInit(): void {
     this.GetPost(); 
     
  }

  GetPost(){
    this.service.getPost()
      .subscribe((response:any)=>{
        // console.log(response)
        this.posts=response;
      },(error)=>{
        // alert("Error Occured....")
        if(error.status>=400 && error.status<=499){
          alert("Client side error...... "+error.status)
        }else if(error.status>=500 && error.status<=599){
          alert("Server side error......")
        }else{
          alert("Somethings is wrong...")
        }
      })
  }

  onSend(mytitle:any,mybody:any){
      let obj={
        title:mytitle,
        body:mybody
      }

        this.service.postData(obj)
        .subscribe((response)=>{
          console.log(response)
        })


  }

  onEdit(post:any){
      // console.log(post)

      this.id=post.id;
      this.title=post.title;
      this.body=post.body;
      this.isHidden=false;
  }

  onUpdate(){
      let obj={
        id:this.id,
        title:this.title,
        body:this.body
      }

      this.service.UpdateData(obj)
      .subscribe((response)=>{
        console.log(response)
        this.isHidden=true;
      })
  }

  onDelete(id:any){
      this.service.Deletedata(id)
      .subscribe((response)=>{
        console.log(response)
      })
  }

}
