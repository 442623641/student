import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamsPage } from './exams';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { EchartComponentModule } from '../../components/echart/echart.module';
/**
 *echarts module
 */
//import { EchartsNg2Module } from 'echart';
import 'echarts-liquidfill';
@NgModule({
  declarations: [
    ExamsPage,
  ],
  imports: [
    //EchartsNg2Module,
    IonicPageModule.forChild(ExamsPage),
    ComponentsModule,
    DirectivesModule,
    EchartComponentModule
  ],

})
export class ExamsPageModule {}
