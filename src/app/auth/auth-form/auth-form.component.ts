import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  form: FormGroup;
  formTitle: string;
  currentRoute: string;
  navStatement: string;
  navLink: string;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.currentRoute = route.snapshot.url[0].path;
  }

  ngOnInit(): void {
    this.onSwitchMode();
    this.form =  this.fb.group({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'confirmPassword': new FormControl(null, Validators.required),
      'displayName': new FormControl(null, Validators.required)
    });
  }

  onSwitchMode() {
    if (this.currentRoute === 'sign-in') {
      this.formTitle = 'Welcome Back! Sign In.';
      this.navStatement = "No account? ";
      this.navLink = "Sign up.";
    } else if (this.currentRoute === 'sign-up') {
      this.formTitle = 'Create an Account!';
      this.navStatement = "Have an account? ";
      this.navLink = "Sign in.";
    }
  }

  onSubmit(form: FormGroup) {
    console.log('hello');
    console.log(form.value);
    this.router.navigate(['home']);
  }

}
