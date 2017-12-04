import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostordersPage } from './lostorders';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LostordersPage,
  ],
  imports: [
    IonicPageModule.forChild(LostordersPage),
    ComponentsModule,
  ],
})
export class LostordersPageModule {}
