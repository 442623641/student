import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamsPage } from './exams';
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
  ],
  imports: [
    EchartsNg2Module,
    IonicPageModule.forChild(ExamsPage),
    ComponentsModule,
    DirectivesModule
  ],

})
export class ExamsPageModule {}
