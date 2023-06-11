import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../tokenService/token.service';

@Injectable()
export class Http implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = this.tokenService.getData().token;
    const modifiedReq = req.clone({
      headers: req.headers
      .set('Authorization', `Bearer ${userToken}`)
      .set('Email', `${this.tokenService.getData().email}`)
      .set('Company-Code', `${this.tokenService.getData().companyCode}`),
    });
    return next.handle(modifiedReq);
  }
}
