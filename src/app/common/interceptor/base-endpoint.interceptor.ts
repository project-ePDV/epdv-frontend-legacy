import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseEndpointInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (
      req.url.startsWith('http://') ||
      req.url.startsWith('https://')
    ) {
      return next.handle(req);
    }
    return next.handle(
      req.clone({
        url: environment.apiPath + req.url
      })
    );
  }
}

