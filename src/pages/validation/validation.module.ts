import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidationPage } from './validation';
import { ComponentsModule } from '../../components';
import { ValidationProvider } from "../../providers/validation/validation";

@NgModule({
  declarations: [
    ValidationPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidationPage),
    ComponentsModule
  ],
  providers: [
    ValidationProvider
  ]
})
export class ValidationPageModule {}
