import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/authService/auth.service';

@Component({
  selector: 'app-not-found404',
  templateUrl: './not-found404.page.html',
  styleUrls: ['./not-found404.page.scss']
})
export class NotFound404Page {
  constructor(private authService: AuthService, private router: Router) {}

  logOut() {
    this.authService.logOut();
  }

  navigate() {
    this.router.navigate(['/caixa']);
  }
}
