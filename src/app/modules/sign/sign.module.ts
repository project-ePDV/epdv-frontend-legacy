import { NgModule } from '@angular/core';

import { SignRoutingModule } from './sign-routing.module';
import { LoginPage } from './pages/login/login.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LoginPage],
  imports: [
    SignRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [LoginPage]
})
export class SignModule { }
