import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnalyzingmodalPage } from './enalyzingmodal';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EnalyzingmodalPage,
  ],
  imports: [
    IonicPageModule.forChild(EnalyzingmodalPage),
    ComponentsModule,
  ]
})
export class EnalyzingmodalPageModule {}
