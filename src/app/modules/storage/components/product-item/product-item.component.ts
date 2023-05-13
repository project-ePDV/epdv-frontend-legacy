import { Component, Input } from '@angular/core';
import { ProductsModel } from 'src/app/modules/shared/models/products.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product!: ProductsModel;
}
