import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const TOKEN = 'token';
const EMAIL = 'email';
const COMPANY_CODE = 'companyCode'

@Injectable({providedIn: 'root'})
export class TokenService {

  constructor(private http: HttpClient) {}

  hasToken(): boolean {
    return !!this.getData().token;
  }

  setData(data: any) {
    window.localStorage.setItem(TOKEN, data.token);
    window.localStorage.setItem(EMAIL, data.email);
    window.localStorage.setItem(COMPANY_CODE, data.company.companyId);
  }

  getData() {
    return {
      token: window.localStorage.getItem(TOKEN),
      email: window.localStorage.getItem(EMAIL),
      companyCode: window.localStorage.getItem(COMPANY_CODE)
    };
  }

  deleteData() {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(EMAIL);
    window.localStorage.removeItem(COMPANY_CODE);
  }

  validateToken(token: string | null) {
    return this.http.get(`${environment.apiPath}/auth/token/${token}`);
  }
}
