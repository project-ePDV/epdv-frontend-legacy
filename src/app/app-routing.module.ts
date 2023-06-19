import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guard/auth.guard';
import { NotFound404Page } from './modules/shared/pages/not-found404/not-found404.page';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'sign/login',
		pathMatch: 'full'
	},
	{
		path: 'sign',
		loadChildren: () =>
			import('./modules/sign/sign.module').then((m) => m.SignModule)
	},
	{
		path: 'caixa',
		loadChildren: () =>
			import('./modules/cashier/cashier.module').then((m) => m.CashierModule),
		canActivate: [AuthGuard],
	},
	{
		path: 'estoque',
		loadChildren: () =>
			import('./modules/storage/storage.module').then((m) => m.StorageModule),
		canActivate: [AuthGuard],
	},
	{
		path: 'notFound',
		component: NotFound404Page
	},
	{ path: '**', redirectTo: 'notFound' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
