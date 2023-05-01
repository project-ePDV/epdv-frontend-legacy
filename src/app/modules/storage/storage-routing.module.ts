import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoragePage } from './pages/storage/storage.page';

const routes: Routes = [
	{
		path: '',
		component: StoragePage
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StorageRoutingModule { }
