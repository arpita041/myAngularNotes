import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObservablesExampleService {

  constructor(private http: HttpClient) { }

firstBasicObservable(): Observable<number>{
  return new Observable<number>(subscriber => {
    try {
      for (let i = 0; i < 20; i++) {
        if (i === 10) {
          throw new Error('An error occurred at value 10'); // Example error
        }
        subscriber.next(i); // Emit numbers from 0 to 19
      }
      subscriber.complete(); // Complete the Observable after emitting all values
    } catch (error) {
      subscriber.error(error); // Pass the error to the subscriber
    }
  });
  }

  apiCallResWithObservable():Observable<any>{
  return this.http.get("https://jsonplaceholder.typicode.com/posts")  
  }

  forkJoinExample():Observable<any>{
    const firstData=this.http.get("https://jsonplaceholder.typicode.com/posts");
    const secondData = this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments") 
   return forkJoin([firstData,secondData]);
  }
  
}
