import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicsPage } from './topics';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { EchartsNg2Module } from 'echarts-ng2';
@NgModule({
  declarations: [
    TopicsPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicsPage),
    EchartsNg2Module,
    ComponentsModule,
    DirectivesModule,
  ]
})
export class TopicsPageModule {}
