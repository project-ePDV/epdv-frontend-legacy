import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.table(this.loginForm.value);
    } else {
      console.log('error');
      
    }
  }

  submitValidationRequired() {
    return this.loginForm.get('email')?.errors!['required'] && this.submitted;
  }
}
