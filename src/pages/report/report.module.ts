import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPage } from './report';
// import { SlicePipe } from '@angular/common';
import { PipesModule } from '../../pipes/pipes.module';
import { EchartsNg2Module } from 'echarts-ng2';
import { ComponentsModule } from '../../components/components.module';
// import { MreportComponent } from '../../components/mreport/mreport';
import { ReportmodalPage } from '../reportmodal/reportmodal';

//import { ScrollheaderComponent } from '../../components/scrollheader/scrollheader';

@NgModule({
  declarations: [
    ReportPage,
    ReportmodalPage
  ],
  imports: [
    IonicPageModule.forChild(ReportPage),
    // ReportmodalPageModule,
    EchartsNg2Module,
    ComponentsModule,
    PipesModule,

  ],
  entryComponents: [
    ReportmodalPage
  ]
})
export class ReportPageModule {}
