import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamsPage } from './exams';
// import { TopicsPage } from '../topics/topics';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
//import { ReportmodalPage } from '../reportmodal/reportmodal';
/**
 *echarts module
 */
import { EchartsNg2Module } from 'echarts-ng2';
import 'echarts-liquidfill';
@NgModule({
  declarations: [
    ExamsPage,
    //TopicsPage,
    //ReportmodalPage
  ],
  imports: [
    EchartsNg2Module,
    IonicPageModule.forChild(ExamsPage),
    ComponentsModule,
    DirectivesModule
  ],
  // entryComponents: [
  //   TopicsPage,
  //   //ReportmodalPage
  // ]

})
export class ExamsPageModule {}
