import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
//import { RegisterPageModule } from '../register/register.module';
import { ValidationPageModule } from '../validation/validation.module';
import { Rocket } from '../../components/rocket/rocket';

@NgModule({
  declarations: [
    LoginPage,
    Rocket,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ValidationPageModule
  ]
})
export class LoginPageModule {}
