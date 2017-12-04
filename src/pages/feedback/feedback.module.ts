import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackPage } from './feedback';

import { UploadimgComponent } from '../../components/uploadimg/uploadimg';
import { DirectivesModule } from '../../directives/directives.module';
import { ComponentsModule } from '../../components/components.module';

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
})
export class FeedbackPageModule {}
