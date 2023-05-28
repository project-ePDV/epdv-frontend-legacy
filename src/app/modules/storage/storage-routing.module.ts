import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoragePage } from './pages/storage/storage.page';
import { RegisterProductPage } from './pages/register-product/register-product.page';

const routes: Routes = [
	{
		path: '',
		component: StoragePage
	},
	{
		path: 'registrar',
		component: RegisterProductPage
	},
	{
		path: 'atualizar/:id',
		component: RegisterProductPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StorageRoutingModule { }
