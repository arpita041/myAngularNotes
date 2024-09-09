import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpReqsService {

  constructor(private http:HttpClient) { }

  getPostData():Observable<any>{
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts/1")
  }
  sendNewData(data:any){
   return this.http.post("https://jsonplaceholder.typicode.com/posts",data);
  }
  updateData(data:any){
    return this.http.put("https://jsonplaceholder.typicode.com/posts/1",data);
  }
  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}

