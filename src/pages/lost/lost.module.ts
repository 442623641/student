import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostPage } from './lost';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    LostPage,
  ],
  imports: [
    IonicPageModule.forChild(LostPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class LostPageModule {}
