import { Component, ElementRef} from '@angular/core';
import { ProductsResponseModel } from 'src/app/modules/cashier/models/ProductResponseModel.model';
import { ProductsService } from 'src/app/modules/cashier/services/products.service';
import { ViewDidEnter  } from '@ionic/angular';
import { ProductsModel } from 'src/app/modules/shared/models/products.model';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss']
})
export class StoragePage implements ViewDidEnter  {
  pageableProducts!: ProductsModel[] | undefined;
  totalRecords!: number;

  constructor(private productsService: ProductsService) {}

  ionViewDidEnter(): void {
    this.paginate(1);
  }
  
  paginate(page: number) {
    this.pageableProducts = undefined;
    this.productsService.getPagebleProducts(page).subscribe({
      next: (response: ProductsResponseModel) => {
          this.totalRecords = Number(response.total);
          this.pageableProducts = response.records;
      },
    });
  }
}
