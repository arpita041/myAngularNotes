import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-ex',
  templateUrl: './template-driven-form-ex.component.html',
  styleUrl: './template-driven-form-ex.component.scss'
})
export class TemplateDrivenFormExComponent {
  user = {
    firstName: '',
    lastName: '',
    country: '',
    gender: '',
    selectedCourses: [] as string[]
  };

  courses = ['Mathematics', 'Science', 'History', 'Art'];

  onCheckChange(event: any) {
    const checkbox = event.target;
    const value = checkbox.value;
    if (checkbox.checked) {
      this.user.selectedCourses.push(value);
    } else {
      const index = this.user.selectedCourses.indexOf(value);
      if (index !== -1) {
        this.user.selectedCourses.splice(index, 1);
      }
    }
  }

  onSubmit(form: any) {
    console.log('Form Data:', form.value);
    console.log('User Data:', this.user);
  
  }
}
