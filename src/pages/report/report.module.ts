import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPage } from './report';
// import { SlicePipe } from '@angular/common';
import { PipesModule } from '../../pipes/pipes.module';
import { EchartsNg2Module } from 'echarts-ng2';
import { ComponentsModule } from '../../components/components.module';
// import { MreportComponent } from '../../components/mreport/mreport';
//import { ReportmodalPageModule } from '../reportmodal/reportmodal.module';

//import { ScrollheaderComponent } from '../../components/scrollheader/scrollheader';

@NgModule({
  declarations: [
    ReportPage,
    // ReportmodalPage,
  ],
  imports: [
    // IonicPageModule.forChild(ReportmodalPage),
    IonicPageModule.forChild(ReportPage),
    // ReportmodalPageModule,
    EchartsNg2Module,
    ComponentsModule,
    PipesModule,
    //ReportmodalPageModule,
  ],
  // entryComponents: [
  //   ReportmodalPage
  // ]
})
export class ReportPageModule {}
