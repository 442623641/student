import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
//import { RegisterPageModule } from '../validation/validation.module';
import { PasswordPageModule } from '../password/password.module';
import { Rocket } from '../../components/rocket/rocket';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    LoginPage,
    Rocket,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    // PasswordPageModule,
    ComponentsModule
  ]
})
export class LoginPageModule {}
