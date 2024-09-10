import { Component } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.scss'
})
export class ChildCompComponent {

someMethod(){
  console.log("This is the child component's method");
}
}
