import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterClient } from '../../modules/registerCliente';
import { RegisterService } from '../../services/register.service';
import { RegisterCostumer } from '../../models/registerCostumer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      accept: []
    })
  }

  get name(): string {
    return this.registerForm.get('name')?.value;
  }

  get companyName(): string {
    return this.registerForm.get('companyName')?.value;
  }

  get email(): string {
    return this.registerForm.get('email')?.value;
  }

  get password(): string {
    return this.registerForm.get('password')?.value;
  }

  get confirmPassword(): string {
    return this.registerForm.get('confirmPassword')?.value;
  }

  get accept(): string {
    return this.registerForm.get('accept')?.value;
  }

  onSubmit() {
    let newCostumer = new RegisterCostumer(
      this.name,
      this.companyName,
      this.email,
      this.password,
      this.confirmPassword
    );

    this.submitted = true;

    if (this.registerForm.valid) {
      console.table(this.registerForm.value);
      this.registerService.register(newCostumer).subscribe(response => {
        this.router.navigate(['/sign/login']);
      });
    } else {
      console.log('error');
    }
  }

  submitValidationRequired() {
    return this.registerForm.get('name')?.errors?.['required'] && this.submitted;
  }
}