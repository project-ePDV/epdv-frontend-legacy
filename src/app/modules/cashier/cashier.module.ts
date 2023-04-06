import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; 
import { CashierRoutingModule } from './cashier-routing.module';
import { ProductListPage } from './pages/product-list/product-list.page';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [ProductListPage, ProductCardComponent],
  imports: [
    CommonModule,
    CashierRoutingModule,
    SharedModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [ProductListPage]
})
export class CashierModule { }
