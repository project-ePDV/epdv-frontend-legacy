import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';

const routes: Routes = [
	{
		path: 'login',
		component: LoginPage,
		pathMatch: 'full'
	},
	{
		path: 'register',
		component: RegisterPage,
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SignRoutingModule { }
