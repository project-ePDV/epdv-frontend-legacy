import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const KEY = 'token';

@Injectable({providedIn: 'root'})
export class TokenService {

  constructor(private http: HttpClient) {}

  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  deleteToken() {
    window.localStorage.removeItem(KEY);
  }

  validateToken(token: string | null) {
    return this.http.get(`${environment.apiPath}/auth/token/${token}`);
  }
}