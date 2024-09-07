import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ObservablesExampleService } from './observables-example.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myAngularNotes';
  constructor(private observableEx:ObservablesExampleService){}

  ngOnInit(){
    this.observableEx.firstBasicObservable().subscribe({
      next(res) {
        console.log("res", res); // Handle each emitted value
      },
      error(err) {
        console.log("err", err); // Handle any error
      },
      complete() {
        console.log("Completed"); // Handle completion (optional)
      }
    });
this.getPostsData();  
this.get2Datas();  
  }

  getPostsData(){
    this.observableEx.apiCallResWithObservable().subscribe({
    next(value){
      console.log("value",value);
    },
    error(error){
      console.log("we have got an error:",error)
    },
    complete(){
      console.log("your req has been completed")
    }
    });
  }
  get2Datas(){
    this.observableEx.forkJoinExample().subscribe({
      next(values){
          console.log("first value",values[0]);
          console.log("second value",values[1]);
      },
      error(err){
        console.log("error",err)
      },
      complete(){
        console.log("completed")
      }
    })
  }
}