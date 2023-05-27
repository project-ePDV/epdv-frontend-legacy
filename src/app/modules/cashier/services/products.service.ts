import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductsResponseModel } from '../models/ProductResponseModel.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsModel } from '../../shared/models/products.model';
import { RequestModel } from '../models/Request.model';
import { ProductRequestModel } from '../models/ProducRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
	private products = new BehaviorSubject<ProductsModel[]>([]);
  producList$ = this.products.asObservable();
  user = 'db_epdv';

	constructor(private http: HttpClient) {
	}

	getPagebleProducts(page: number, size: number): Observable<ProductsResponseModel> {
		let queryParams = { page: page, size: size };
		
    return this.http
      .get<ProductsResponseModel>(`${environment.apiPath}/api/${this.user}/produtos`, {params: queryParams})
	}

  newRequest(request: RequestModel) {
    return this.http.post(`${environment.apiPath}/api/${this.user}/admin/vendas`, request);
  }

  newProductRequest(productRequest: ProductRequestModel[]) {
    return this.http.post(`${environment.apiPath}/api/${this.user}/admin/vendaProduto`, productRequest);
  }

  sendProducts(product: ProductsModel) {
		let productList = [...this.products.getValue(), product];
    this.products.next(productList);
  }
}