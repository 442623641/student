import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { AgreementPageModule } from '../agreement/agreement.module';
@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    AgreementPageModule
  ],
})
export class RegisterPageModule {}
