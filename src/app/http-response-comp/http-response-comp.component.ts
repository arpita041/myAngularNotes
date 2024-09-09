import { Component } from '@angular/core';
import { HttpReqsService } from '../http-reqs.service';

@Component({
  selector: 'app-http-response-comp',
  templateUrl: './http-response-comp.component.html',
  styleUrl: './http-response-comp.component.scss'
})
export class HttpResponseCompComponent {
postData:any;
isData= false;
newData={
  id:1222,
  title:'Define beauty?..Her POV',
  body:'Your words paint a picture so perfect, like a dream wrapped in light. But even in my brightest moments, there are shadows..',
  userId:8483
}
constructor(private service:HttpReqsService){}

ngOnInit(){
  this.service.getPostData().subscribe({
    next:(data) =>{
      this.postData=data;   
      this.isData= true;
      console.log("postData",this.postData) 
    },
    error:(error)=>{
     console.log("this is an error:",error)
    }
  })
  this.setNewData();
  this.updateData()
}
setNewData(){
  this.service.sendNewData(this.newData).subscribe({
    next:(data)=>{
      console.log("data is set:",data)
    }
  });
}

updateData(){
  this.service.updateData(this.newData).subscribe({
    next:(data)=>{
      console.log("data is updated:",data)
    }
  });
}
}
