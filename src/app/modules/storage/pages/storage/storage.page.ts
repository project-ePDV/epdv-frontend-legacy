import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsResponseModel } from 'src/app/modules/cashier/models/ProductResponseModel.model';
import { ProductsService } from 'src/app/modules/cashier/services/products.service';
import { ViewDidEnter  } from '@ionic/angular';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss']
})
export class StoragePage implements ViewDidEnter  {
  pageableProducts$!: Observable<ProductsResponseModel>;
  page = 0;
  total = 0;
  size = 6;

  constructor(private productsService: ProductsService) {}

  ionViewDidEnter(): void {
    this.paginate(1)
  }
  
  paginate(page: number) {
    this.pageableProducts$ = this.productsService.getPagebleProducts(page, this.size);

    this.productsService.getPagebleProducts(page, this.size).subscribe({
      next: (value: ProductsResponseModel) => {
          console.log(value.params);
          this.page = Number(value.params.page);
          this.total = Number(value.records.length);
          console.log(value.records.length);
      },
    });
  }

  nextPage() {
    this.total >= this.size ? this.page += 1 : null;
    
    this.pageableProducts$ = this.productsService.getPagebleProducts(this.page, this.size);
  }

  previPage() {
    this.page <= 0 ? this.page = 1 : this.page += 1;
    this.pageableProducts$ = this.productsService.getPagebleProducts(this.page, this.size);
  }
}
