import { NgModule } from '@angular/core';

import { SignRoutingModule } from './sign-routing.module';
import { LoginPage } from './pages/login/login.page';
import { IonicModule } from '@ionic/angular';
import { RegisterPage } from './pages/register/register.page';

@NgModule({
  declarations: [LoginPage, RegisterPage],
  imports: [
    SignRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [LoginPage]
})
export class SignModule { }
