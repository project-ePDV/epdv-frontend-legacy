import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../tokenService/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this.tokenService.getToken();
      
    if (!this.tokenService.hasToken()) {
      
    } else {
      this.tokenService.validateToken(token).subscribe({
        error: () => {
          console.log('erro');
          
          this.router.navigate(['/sign/login']);
          return false;
        },
        complete: () => { return true }
      });
    }
    return true;
  }
}
