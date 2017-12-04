import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamsPage } from './exams';
// import { ReportPageModule } from '../report/report.module';
// import { DoctorPageModule } from '../doctor/doctor.module';
// import { ReplyPageModule } from '../reply/reply.module';

//import { ScrollheaderComponent } from '../../components/scrollheader/scrollheader';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
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
    // ReportPageModule,
    // DoctorPageModule,
    // ReplyPageModule,
    ComponentsModule,
    DirectivesModule
  ],

})
export class ExamsPageModule {}
