import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPage } from './report';
import { PipesModule } from '../../pipes/pipes.module';
import { EchartComponentModule } from '../../components/echart/echart.module';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    ReportPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportPage),
    EchartComponentModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class ReportPageModule {}
