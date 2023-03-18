import { NgModule } from '@angular/core';

import { SignRoutingModule } from './sign-routing.module';
import { LoginPage } from './pages/login/login.page';
import { IonicModule } from '@ionic/angular';
import { RegisterPage } from './pages/register/register.page';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@NgModule({
  declarations: [LoginPage, RegisterPage, SocialMediaComponent],
  imports: [
    CommonModule,
    SignRoutingModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [LoginPage]
})
export class SignModule { }
