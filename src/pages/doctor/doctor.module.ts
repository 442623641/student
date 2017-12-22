import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorPage } from './doctor';
import { EchartComponentModule } from '../../components/echart/echart.module';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    DoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorPage),
    EchartComponentModule,
    ComponentsModule,
    DirectivesModule,
  ]
})
export class DoctorPageModule {}
