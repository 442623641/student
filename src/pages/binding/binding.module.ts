import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BindingPage } from './binding';
import { CityPickerModule } from "ionic2-city-picker";
import { SchoolsPageModule } from '../schools/schools.module';
@NgModule({
  declarations: [
    BindingPage,
  ],
  imports: [
    IonicPageModule.forChild(BindingPage),
    CityPickerModule,
    SchoolsPageModule,
  ],
})
export class BindingPageModule {}
