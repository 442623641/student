import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostorderPage } from './lostorder';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    LostorderPage,
  ],
  imports: [
    IonicPageModule.forChild(LostorderPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class LostorderPageModule {}
