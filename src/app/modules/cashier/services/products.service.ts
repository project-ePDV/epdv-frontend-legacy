import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductsResponseModel } from '../models/ProductResponseModel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

	constructor(private http: HttpClient) {
	}

	getPagebleProducts(page: number, size: number): Observable<ProductsResponseModel> {
		let queryParams = { page: page, size: size };
    const user = 'db_epdv';
		
    return this.http
      .get<ProductsResponseModel>(`${environment.apiPath}/api/${user}/produtos`, {params: queryParams})
	}
}