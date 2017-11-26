import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackPage } from './feedback';
import { UploadImgProvider } from "../../providers/uploadimg/uploadimg";
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    FeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedbackPage),
    ComponentsModule
  ],
  providers: [
    UploadImgProvider
  ]
})
export class FeedbackPageModule {}
