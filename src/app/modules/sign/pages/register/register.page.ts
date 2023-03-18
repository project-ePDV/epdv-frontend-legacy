import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterClient } from '../../modules/registerCliente';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  registerClient!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerClient = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      accept: ['']
    })
  }

  onSubmit() {
    console.log(this.registerClient.get('name')?.errors!['required']);
    this.submitted = true;
    if (this.registerClient.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerClient.value);
    } else {
      console.log('error');
      
    }
  }

  submitValidation() {
    return this.registerClient.get('name')?.errors!['required'] && this.submitted;
  }
}