import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterCostumer } from '../models/registerCostumer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(CostumerData: RegisterCostumer): Observable<RegisterCostumer> {
    return this.http.post<RegisterCostumer>(`${environment.apiPath}/sign/register`, CostumerData);
  }
}
