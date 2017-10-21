import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { AnalysisPage } from './analysis';
import { AnalysisProvider } from '../../providers/analysis/analysis';
import { AnalysiscontentPageModule } from '../analysiscontent/analysiscontent.module';
//import { AnalysiscontentPage } from '../analysiscontent/analysiscontent';
@NgModule({
  declarations: [
    AnalysisPage,
    //AnalysiscontentPage
  ],
  imports: [
    IonicModule,
    IonicPageModule.forChild(AnalysisPage),
    //IonicPageModule.forChild(AnalysiscontentPage),
    AnalysiscontentPageModule,
  ],
  providers: [
    AnalysisProvider
  ]
})
export class AnalysisPageModule {}
