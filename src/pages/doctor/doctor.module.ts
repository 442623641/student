import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorPage } from './doctor';
import { EchartsNg2Module } from 'echarts-ng2';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    DoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorPage),
    EchartsNg2Module,
    ComponentsModule,
    DirectivesModule,
  ]
})
export class DoctorPageModule {}
