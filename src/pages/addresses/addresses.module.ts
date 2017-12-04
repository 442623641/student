import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressesPage } from './addresses';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    AddressesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressesPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class AddressesPageModule {}
