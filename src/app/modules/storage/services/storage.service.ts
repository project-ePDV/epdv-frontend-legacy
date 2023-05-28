import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsResponseModel } from '../../cashier/models/ProductResponseModel.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterProduct } from '../models/registerProduct.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  user = 'db_epdv';
  constructor(private http: HttpClient) { }

  getPagebleProducts(page: number, size: number): Observable<ProductsResponseModel> {
		let queryParams = { page: page, size: size };
		
    return this.http
      .get<ProductsResponseModel>(`${environment.apiPath}/api/${this.user}/produtos`, {params: queryParams})
	}

  getProductById(id: number): Observable<ProductsResponseModel> {
    return this.http
      .get<ProductsResponseModel>(`${environment.apiPath}/api/${this.user}/produtos/${id}`)
  }
  
  deleteProductById(id: number) {	
    return this.http
      .delete(`${environment.apiPath}/api/${this.user}/admin/produtos/${id}`)
  }
  
  registerProduct(product: RegisterProduct) {
    return this.http.post(`${environment.apiPath}/api/${this.user}/admin/produtos`, product);
  }

  updateProduct(id: number, product: RegisterProduct) {
    return this.http.put(`${environment.apiPath}/api/${this.user}/admin/produtos/${id}`, product);
  }
}
