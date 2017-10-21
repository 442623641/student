import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamsPage } from './exams';
import { ReportPageModule } from '../report/report.module';
import { DoctorPageModule } from '../doctor/doctor.module';
//import { ScrollheaderComponent } from '../../components/scrollheader/scrollheader';
import { ExamsProvider } from '../../providers/exams/exams';
import { ChartsProvider } from '../../providers/charts/charts';
/**
 *echarts module
 */
import { EchartsNg2Module } from 'echarts-ng2';
import 'echarts-liquidfill';

@NgModule({
  declarations: [
    ExamsPage,
    //ScrollheaderComponent,
  ],
  imports: [
    EchartsNg2Module,
    IonicPageModule.forChild(ExamsPage),
    ReportPageModule,
    DoctorPageModule,

  ],
  exports: [
    //ScrollheaderComponent,
  ],
  providers: [
    ExamsProvider,
    ChartsProvider
  ],
})
export class ExamsPageModule {}
