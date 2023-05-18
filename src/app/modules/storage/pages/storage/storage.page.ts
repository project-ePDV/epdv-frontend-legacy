import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsResponseModel } from 'src/app/modules/cashier/models/ProductResponseModel.model';
import { ProductsService } from 'src/app/modules/cashier/services/products.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss']
})
export class StoragePage implements OnInit {
  productList = [1,2,3,4,5,6,7,1,2,3,4,5,6,7];
  pageableProducts$!: Observable<ProductsResponseModel>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
      this.paginate(1)
  }
  
  paginate(page: number) {
    this.pageableProducts$ = this.productsService.getPagebleProducts(page, 20);
  }
}
