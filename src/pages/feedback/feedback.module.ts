import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackPage } from './feedback';
import { ComponentsModule } from '../../components';
import { ValidationProvider } from "../../providers/validation/validation";
@NgModule({
  declarations: [
    FeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedbackPage),
    ComponentsModule
  ],
  providers:[
    ValidationProvider
  ]
})
export class FeedbackPageModule {}
