import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { AnalysiscontentPage } from './analysiscontent';

@NgModule({
  declarations: [
    AnalysiscontentPage,
  ],
  imports: [
    IonicModule,
    IonicPageModule.forChild(AnalysiscontentPage),
  ],
})
export class AnalysiscontentPageModule {}
