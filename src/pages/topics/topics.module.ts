import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicsPage } from './topics';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { EchartComponentModule } from '../../components/echart/echart.module';
@NgModule({
  declarations: [
    TopicsPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicsPage),
    EchartComponentModule,
    ComponentsModule,
    DirectivesModule,
  ]
})
export class TopicsPageModule {}
