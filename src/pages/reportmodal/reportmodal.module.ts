import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportmodalPage } from './reportmodal';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ReportmodalPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportmodalPage),
    ComponentsModule,
  ],
  entryComponents: [
    ReportmodalPage
  ]
})
export class ReportmodalPageModule {}
