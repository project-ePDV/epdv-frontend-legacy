import { Injectable } from "@angular/core";
import { TokenService } from "../tokenService/token.service";
import { RegisterCostumer } from "src/app/modules/sign/models/registerCostumer.model";
import { Observable, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) { }

  login(CostumerData: any): Observable<any> {
    return this.http
      .post<any>(`${environment.apiPath}/sign/login`, CostumerData)
      .pipe(tap(res => {
        const data = {
          token: res['token'],
          email: res['email'],
          company: res['company']
        }
        this.tokenService.setData(data)
      }));
  }

  logOut() {
    this.tokenService.deleteData();
    this.router.navigate(['sign/login']);
  }

  register(CostumerData: RegisterCostumer): Observable<RegisterCostumer> {
    return this.http.post<RegisterCostumer>(`${environment.apiPath}/sign/register`, CostumerData);
  }
}
