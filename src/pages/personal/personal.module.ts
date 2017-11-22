import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalPage } from './personal';
import { BindingPageModule } from '../binding/binding.module';
import { CityPickerModule } from "ionic2-city-picker";
import { SchoolsPageModule } from '../schools/schools.module';

import { ComponentsModule } from '../../components/components.module';
//import { SubmitonComponent } from '../../components/submiton/submiton';
@NgModule({
  declarations: [
    PersonalPage,
    //SubmitonComponent,

  ],
  imports: [
    IonicPageModule.forChild(PersonalPage),
    CityPickerModule,
    SchoolsPageModule,
    ComponentsModule,
  ],
  // providers: [
  //   PersonalProvider
  // ]
})
export class PersonalPageModule {}
