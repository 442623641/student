import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SysmessagesPage } from './sysmessages';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    SysmessagesPage
  ],
  imports: [
    IonicPageModule.forChild(SysmessagesPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class SysmessagesPageModule {}
