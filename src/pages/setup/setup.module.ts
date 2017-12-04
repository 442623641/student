import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetupPage } from './setup';
//import {AboutusPageModule} from '../aboutus/aboutus.module';

@NgModule({
  declarations: [
    SetupPage,
  ],
  imports: [
    IonicPageModule.forChild(SetupPage),
    // AboutusPageModule
  ],
})
export class SetupPageModule {}
