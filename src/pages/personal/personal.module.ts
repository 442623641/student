import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalPage } from './personal';
import { CityPickerModule } from "ionic2-city-picker";
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    PersonalPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalPage),
    CityPickerModule,
    ComponentsModule,
    DirectivesModule,
  ],
})
export class PersonalPageModule {}
