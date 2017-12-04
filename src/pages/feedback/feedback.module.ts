import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackPage } from './feedback';

import { UploadimgComponent } from '../../components/uploadimg/uploadimg';
import { DirectivesModule } from '../../directives/directives.module';
import { ComponentsModule } from '../../components/components.module';
// import { FilePath } from '@ionic-native/file-path';
@NgModule({
  declarations: [
    FeedbackPage,
    UploadimgComponent,

  ],
  imports: [
    IonicPageModule.forChild(FeedbackPage),
    ComponentsModule,
    DirectivesModule
  ],
  exports: [
    UploadimgComponent
  ],
  // providers: [
    // AppProvider,
    // ActionSheet,
    // FilePath
    // CameraPreview,
    // ImagePicker,
  // ]
})
export class FeedbackPageModule {}
