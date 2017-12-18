import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressPage } from './address';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { CityPickerModule } from "ionic2-city-picker";
@NgModule({
  declarations: [
    AddressPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressPage),
    ComponentsModule,
    DirectivesModule,
    CityPickerModule,
  ],
})
export class AddressPageModule {}
