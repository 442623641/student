import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidationPage } from './validation';
import { ConfirmPageModule } from '../confirm/confirm.module';
@NgModule({
  declarations: [
    ValidationPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidationPage),
    ConfirmPageModule,
  ],
})
export class ValidationPageModule {}
