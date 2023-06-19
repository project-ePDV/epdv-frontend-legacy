import { Component, Input } from '@angular/core';
import { ProductsModel } from 'src/app/modules/shared/models/products.model';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product!: ProductsModel;
  isLoading = false;

  constructor(private storageService: StorageService, private router: Router) {}
  
  deleteProduct(id: number) {
    this.isLoading = true;
    this.storageService.deleteProductById(id).subscribe({
      next: () => (window.location.reload()),
      error: () => (this.isLoading = false)
    });
  }
}
