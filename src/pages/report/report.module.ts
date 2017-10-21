import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPage } from './report';
import { SlicePipe } from '@angular/common';
import { PipesModule } from '../../pipes/pipes.module';
import { EchartsNg2Module } from 'echarts-ng2';
import { ComponentsModule } from '../../components';
//import { ScrollheaderComponent } from '../../components/scrollheader/scrollheader';

@NgModule({
  declarations: [
    ReportPage,
    //ScrollheaderComponent,
  ],
  imports: [
    IonicPageModule.forChild(ReportPage),
    PipesModule,
    EchartsNg2Module,
    ComponentsModule,
  ],
})
export class ReportPageModule {}
