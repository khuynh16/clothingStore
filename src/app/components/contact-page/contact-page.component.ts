import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form =  this.fb.group({
      'email': new FormControl(null),
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'query': new FormControl(null)
    });
  }

  onSubmit(form: FormGroup) {
    console.log('hello');
    console.log(form.value);
  }

}
