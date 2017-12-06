import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorPage } from './doctor';
import { EchartsNg2Module } from 'echarts-ng2';
import { TopicsPageModule } from '../topics/topics.module';
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
    TopicsPageModule
  ]
})
export class DoctorPageModule {}
