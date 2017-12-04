import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostguidePage } from './lostguide';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    LostguidePage,
  ],
  imports: [
    IonicPageModule.forChild(LostguidePage),
    ComponentsModule,
  ],
})
export class LostguidePageModule {}
