import { Component, ViewChild } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrl: './parent-comp.component.scss'
})
export class ParentCompComponent {
 // @ViewChild('ChildCompComponent') childComp:ChildCompComponent | undefined;
  @ViewChild(ChildCompComponent, { static: true }) childComp: ChildCompComponent | undefined;
/*static: true: This means that Angular will resolve the @ViewChild query during the component’s initialization phase, 
specifically during the ngOnInit lifecycle hook. This is useful when you need to access the child component or element 
before the view is fully initialized.*/
  ngAfterViewInit() {
    console.log("child compo", this.childComp)
    if (this.childComp) {
      this.childComp.someMethod(); // Access methods or properties of ChildCompComponent
    }
  }

}
