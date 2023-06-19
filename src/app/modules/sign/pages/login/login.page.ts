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
  isLoading = false;

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
    let loginUser;

    this.submitted = true;

    if (this.loginForm.valid) {
      this.isLoading = true;

      loginUser = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.authService.login(loginUser).subscribe({
        complete: () => { 
          this.router.navigate(['/caixa']);
          this.isLoading = false;
        },
        error: () => { 
          this.authError = true;
          this.isLoading = false 
        }
      });
    }
  }

  submitValidationRequired() {
    return this.loginForm.get('email')?.errors?.['required'] && this.submitted;
  }
}
