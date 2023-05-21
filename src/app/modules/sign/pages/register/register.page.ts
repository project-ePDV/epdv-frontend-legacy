import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { RegisterCostumer } from '../../models/registerCostumer.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/authService/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  registerForm!: FormGroup;
  registerError = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
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
      this.authService.register(newCostumer).subscribe({
        complete: () => { this.router.navigate(['/sign/login']) },
        error: () => { this.registerError = true; }
      });
    }
  }

  submitValidationRequired() {
    return this.registerForm.get('name')?.errors?.['required'] && this.submitted;
  }
}