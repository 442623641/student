import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPage } from './report';
import { PipesModule } from '../../pipes/pipes.module';
import { EchartsNg2Module } from 'echarts-ng2';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    ReportPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportPage),
    EchartsNg2Module,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class ReportPageModule {}
