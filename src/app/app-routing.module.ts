import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'app/sign/login', pathMatch: 'full' },
	{
		path: 'app/sign',
		loadChildren: () =>
			import('./modules/sign/sign.module').then((m) => m.SignModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
