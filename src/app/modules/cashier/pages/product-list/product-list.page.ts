import { Component, OnInit } from '@angular/core';
import { createProductList } from 'src/app/utils/product.mock';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { ProductsResponseModel } from '../../models/ProductResponseModel.model';
import { Router } from '@angular/router';
import { ProductsModel } from 'src/app/modules/shared/models/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss']
})
export class ProductListPage implements OnInit{
  producstList = createProductList(10);
  pageableProducts$!: Observable<ProductsResponseModel>;

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.paginate(1);
  }

  paginate(page: number) {

    this.pageableProducts$ = this.productsService.getPagebleProducts(page, 20);
  }
}
