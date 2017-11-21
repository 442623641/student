import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmPage } from './confirm';
import { ValidationProvider } from '../../providers/validation/validation';
@NgModule({
  declarations: [
    ConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmPage),
  ],
  providers: [
    ValidationProvider
  ]
})
export class ConfirmPageModule {}
