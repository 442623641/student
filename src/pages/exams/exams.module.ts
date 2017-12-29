import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamsPage } from './exams';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { EchartComponentModule } from '../../components/echart/echart.module';
import { LiquidComponent } from '../../components/liquid/liquid';

@NgModule({
  declarations: [
    ExamsPage,
    LiquidComponent,
  ],
  imports: [
    //EchartsNg2Module,
    IonicPageModule.forChild(ExamsPage),
    ComponentsModule,
    DirectivesModule,
    EchartComponentModule
  ],
  exports: [
    LiquidComponent
  ]

})
export class ExamsPageModule {}
