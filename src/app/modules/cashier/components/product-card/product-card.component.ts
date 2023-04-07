import { Component, Input } from '@angular/core';
import { ProductsModel } from 'src/app/modules/shared/models/products.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input()
  value!: ProductsModel;
}
