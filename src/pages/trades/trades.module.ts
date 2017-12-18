import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TradesPage } from './trades';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    TradesPage,
  ],
  imports: [
    IonicPageModule.forChild(TradesPage),
    ComponentsModule,
    DirectivesModule,
  ],

})
export class TradesPageModule {}
