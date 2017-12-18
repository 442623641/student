import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SysmessagePage } from './sysmessage';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    SysmessagePage,
  ],
  imports: [
    IonicPageModule.forChild(SysmessagePage),
    ComponentsModule,
    DirectivesModule,
  ]
})
export class SysmessagePageModule {}
