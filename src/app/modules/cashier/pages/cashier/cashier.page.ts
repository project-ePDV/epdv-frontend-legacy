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
  totalPrice = 0;
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
          this.totalPrice += Number(product.price);
        })
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
      value: this.totalPrice.toFixed(2)
    } as RequestModel

    this.productService.newRequest(request).subscribe({
      complete: () => {
        this.productService.newProductRequest(this.productList).subscribe({
          complete: () => {
              this.router.navigate(['/caixa']);
          },
        })        
      }
    });
  }

  generateUUID(prefix: string) {
    return prefix + uuidv4().slice(0, -1);
  }
}
