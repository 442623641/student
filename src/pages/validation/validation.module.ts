import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidationPage } from './validation';
import { ComponentsModule } from '../../components';

@NgModule({
  declarations: [
    ValidationPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidationPage),
    ComponentsModule
  ]
})
export class ValidationPageModule {}
