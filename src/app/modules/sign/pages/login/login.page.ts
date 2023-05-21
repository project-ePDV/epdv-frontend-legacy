import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/authService/auth.service';
import { TokenService } from 'src/app/common/tokenService/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  loginForm!: FormGroup;
  authError = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    let loginUser;
    if (this.loginForm.valid) {
      loginUser = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      this.authService.login(loginUser).subscribe({
        complete: () => { this.router.navigate(['/caixa'])},
        error: () => { this.authError = true; }
      })
    }
  }

  submitValidationRequired() {
    return this.loginForm.get('email')?.errors?.['required'] && this.submitted;
  }
}
