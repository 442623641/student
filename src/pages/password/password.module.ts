import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordPage } from './password';
import { ValidationProvider } from "../../providers/validation/validation";
import { NativeProvider } from '../../providers/native';
@NgModule({
  declarations: [
    PasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordPage),
  ],
  providers: [
    ValidationProvider,
    NativeProvider
  ]
})
export class PasswordPageModule {}
