import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactive-form-ex',
  templateUrl: './reactive-form-ex.component.html',
  styleUrl: './reactive-form-ex.component.scss'
})
export class ReactiveFormExComponent {

  myForm:FormGroup;
  public checks = [
    {description: 'descr1', value: 'java'},
    {description: "descr2", value: 'angular'},
    {description: "descr3", value: 'react'}
  ];
  constructor(private fb:FormBuilder){
this.myForm= this.fb.group({
  firstname:['',Validators.required],
  lastname:['',Validators.required],
  country:['',Validators.required],
  gender:['',Validators.required],
  courses: this.fb.array([])
});
  }

  onCheckChange(event:any){
    console.log("target value",event)
    const formArray: FormArray = this.myForm.get('courses') as FormArray;
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }else{
      let i: number = 0;

      formArray.controls.forEach((ctrl) => {
        if(ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
  
        i++;
      });
    }
  }

  onSubmit(){
    console.log("the forms value",this.myForm?.value);
    console.log("is form valid?", this.myForm.valid)
  }
}
