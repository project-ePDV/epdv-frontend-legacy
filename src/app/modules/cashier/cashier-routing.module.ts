import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPage } from './pages/product-list/product-list.page';

const routes: Routes = [
	{
		path: 'produtos',
		component: ProductListPage,
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CashierRoutingModule { }
