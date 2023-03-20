import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; 
import { ProductsPage } from './pages/products/products.page';
import { CashierRoutingModule } from './cashier-routing.module';
import { HeaderComponent } from '../shared/components/header/header.component';

@NgModule({
  declarations: [ProductsPage, HeaderComponent],
  imports: [
    CommonModule,
    CashierRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [ProductsPage]
})
export class CashierModule { }
