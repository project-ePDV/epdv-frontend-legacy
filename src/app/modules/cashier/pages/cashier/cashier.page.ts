import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { ProductsModel } from 'src/app/modules/shared/models/products.model';
import { Router } from '@angular/router';
import { RequestModel } from '../../models/Request.model';
import { ProductRequestModel } from '../../models/ProducRequest.model';
const { v4: uuidv4 } = require('uuid');

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.page.html',
  styleUrls: ['./cashier.page.scss']
})
export class CashierPage implements OnInit {
  products$!: Observable<ProductsModel[]>;
  productList: Array<ProductRequestModel> = [];
  totalPrice: any;
  requestId = '';

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.products$ = this.productService.producList$

    this.products$.subscribe({
      next: (products) => {
        products.forEach((product) => {
          this.productList.push({
            fk_request: this.requestId,
            fk_product: product.id
          } as ProductRequestModel)
        })
        this.totalPrice = this.productService.totalPrice();
      }
    });
    if (this.requestId == '') {
      this.requestId = this.generateUUID('r');
    }
  }

  newProduct() {
    this.router.navigate(['/caixa/produtos'], { queryParams: { request: this.requestId } });
  }

  newRequest() {
    const request = {
      id: this.requestId,
      value: this.totalPrice
    } as RequestModel

    console.log(request);
    console.log(this.productList);
    
    this.productService.newRequest(request).subscribe({
      complete: () => {
        this.productService.newProductRequest(this.productList).subscribe({
          complete: () => {
            this.router.navigate(['/estoque']);
          },
        })
      }
    });
  }

  generateUUID(prefix: string) {
    return prefix + uuidv4().slice(0, -1);
  }

  deleteProduct(id: number) {
    this.productService.deleteProducts(id);
    this.productList.splice(id, 1);
    this.totalPrice = this.productService.totalPrice();
  }
}
