import { Component } from '@angular/core';
import { createProductList } from 'src/app/utils/product.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss']
})
export class ProductListPage {
  producstList = createProductList(10);
}
