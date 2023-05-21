import { Injectable } from "@angular/core";
import { TokenService } from "../tokenService/token.service";
import { RegisterCostumer } from "src/app/modules/sign/models/registerCostumer.model";
import { Observable, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(CostumerData: any): Observable<any> {
    return this.http
      .post<any>(`${environment.apiPath}/sign/login`, CostumerData)
      .pipe(tap(res => {
        this.tokenService.setToken(res['token'])
      }));
  }

  register(CostumerData: RegisterCostumer): Observable<RegisterCostumer> {
    return this.http.post<RegisterCostumer>(`${environment.apiPath}/sign/register`, CostumerData);
  }
}