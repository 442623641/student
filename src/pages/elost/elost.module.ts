import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElostPage } from './elost';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ElostPage,
  ],
  imports: [
    IonicPageModule.forChild(ElostPage),
    ComponentsModule,
  ],
})
export class ElostPageModule {}
