import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPage } from './pages/product-list/product-list.page';
import { CashierPage } from './pages/cashier/cashier.page';
import { FinalizePage } from './pages/finalize/finalize/finalize.page';

const routes: Routes = [
	{
		path: '',
		component: CashierPage,
		pathMatch: 'full'
	},
	{
		path: 'produtos',
		component: ProductListPage,
		pathMatch: 'full'
	},
	{
		path: 'finalizado',
		component: FinalizePage,
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CashierRoutingModule { }
