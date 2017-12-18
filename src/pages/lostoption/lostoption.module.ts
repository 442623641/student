import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostoptionPage } from './lostoption';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    LostoptionPage,
  ],
  imports: [
    IonicPageModule.forChild(LostoptionPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class LostoptionPageModule {}
