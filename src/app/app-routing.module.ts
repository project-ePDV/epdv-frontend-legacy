import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'app/sign/login', pathMatch: 'full' },
	{
		path: 'app/sign',
		loadChildren: () =>
			import('./modules/sign/sign.module').then((m) => m.SignModule)
	},
	{
		path: 'app/caixa',
		loadChildren: () =>
			import('./modules/cashier/cashier.module').then((m) => m.CashierModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
