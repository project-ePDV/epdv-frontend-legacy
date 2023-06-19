import { Component, Input } from '@angular/core';
import { ProductsModel } from 'src/app/modules/shared/models/products.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input()
  value!: ProductsModel;

  requestId!: number;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.activatedRoute.queryParams.subscribe((params) => this.requestId = params['request']);
    }

  notify(product: ProductsModel) {
    this.productService.sendProducts(product);
    this.router.navigate(['/caixa'], { queryParams: { request: this.requestId } });
  }
}
