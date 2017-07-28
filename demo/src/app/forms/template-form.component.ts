import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('f') userForm:HTMLFormElement;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log( this.userForm);
  }
  onPopulate(){
    this.userForm.form.patchValue({
      name: "Rahul Bhooteshwar",
      email: "rahul.bhooteshwar@gmail.com"
    });
  }

}
