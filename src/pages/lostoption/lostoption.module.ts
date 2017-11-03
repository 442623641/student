import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostoptionPage } from './lostoption';
import { ComponentsModule } from '../../components';
@NgModule({
  declarations: [
    LostoptionPage,
  ],
  imports: [
    IonicPageModule.forChild(LostoptionPage),
    ComponentsModule,
  ],
})
export class LostoptionPageModule {}
