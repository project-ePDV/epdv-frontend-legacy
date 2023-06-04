import { Component, ElementRef } from '@angular/core';
import { ProductsResponseModel } from 'src/app/modules/cashier/models/ProductResponseModel.model';
import { ProductsService } from 'src/app/modules/cashier/services/products.service';
import { ViewDidEnter } from '@ionic/angular';
import { ProductsModel } from 'src/app/modules/shared/models/products.model';
import { ParamsModel } from '../../models/params.class';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss']
})
export class StoragePage implements ViewDidEnter {
  pageableProducts!: ProductsModel[] | undefined;
  reqParams = new ParamsModel('', '', '');
  totalRecords!: number;

  constructor(private storageService: StorageService) { }

  ionViewDidEnter(): void {
    this.paginate(1, this.reqParams);
  }

  paginate(page: number, params: ParamsModel = this.reqParams) {
    this.pageableProducts = undefined;
    this.storageService.getPagebleProducts(page, this.reqParams).subscribe({
      next: (response: ProductsResponseModel) => {
        this.totalRecords = Number(response.total);
        this.pageableProducts = response.records;
      },
    });
  }

  filterProducts(filterParams: any) {
    this.reqParams = filterParams;
    this.paginate(1, filterParams)
  }
}
