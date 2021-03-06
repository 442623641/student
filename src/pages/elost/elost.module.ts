import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElostPage } from './elost';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    ElostPage,
  ],
  imports: [
    IonicPageModule.forChild(ElostPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class ElostPageModule {}
