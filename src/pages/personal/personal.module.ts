import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityPickerModule } from "ionic2-city-picker";
import { PersonalPage } from './personal';
//import { ComponentsModule } from '../../components';
//import { SubmitonComponent } from '../../components/submiton/submiton';
@NgModule({
  declarations: [
    PersonalPage,
    //SubmitonComponent,

  ],
  imports: [
    IonicPageModule.forChild(PersonalPage),
    CityPickerModule,
    //ComponentsModule,
  ]
})
export class PersonalPageModule {}
