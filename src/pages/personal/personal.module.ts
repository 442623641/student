import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalPage } from './personal';
import { CityPickerModule } from "ionic2-city-picker";
import { SchoolsPageModule } from '../schools/schools.module';
import { ComponentsModule } from '../../components/components.module';
//import { TabsModule } from '../tabs/tabs.module';
@NgModule({
  declarations: [
    PersonalPage,
    //SubmitonComponent,

  ],
  imports: [
    IonicPageModule.forChild(PersonalPage),
    CityPickerModule,
    // SchoolsPageModule,
    ComponentsModule,
    //TabsModule,
  ],
  // providers: [
  //   PersonalProvider
  // ]
})
export class PersonalPageModule {}
