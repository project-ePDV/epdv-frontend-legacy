import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductsResponseModel } from '../models/ProductResponseModel.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsModel } from '../../shared/models/products.model';
import { RequestModel } from '../models/Request.model';
import { ProductRequestModel } from '../models/ProducRequest.model';
import { TokenService } from 'src/app/common/tokenService/token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = new BehaviorSubject<ProductsModel[]>([]);
  producList$ = this.products.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) { }

  user = this.tokenService.getData().companyCode;

  getPagebleProducts(page: number, size: number = 6): Observable<ProductsResponseModel> {
    let queryParams = { page: page, size: size };

    return this.http
      .get<ProductsResponseModel>(`${environment.apiPath}/api/${this.user}/produtos`, { params: queryParams })
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

  getProducts() {
    return this.products.getValue();
  }

  deleteProducts(id: number) {
    this.products.getValue().splice(id, 1);
  }
  
  totalPrice() {
    let total = 0;
    this.products.getValue().forEach((product) => {
      total += Number(product.price);
    });
    
    return total.toFixed(2);
  }
}
