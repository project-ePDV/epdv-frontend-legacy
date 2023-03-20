import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPage } from './pages/products/products.page';

const routes: Routes = [
	{
		path: 'produtos',
		component: ProductsPage,
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CashierRoutingModule { }
