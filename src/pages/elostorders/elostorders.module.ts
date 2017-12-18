import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElostordersPage } from './elostorders';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    ElostordersPage,
    //LostguidePage
  ],
  imports: [
    IonicPageModule.forChild(ElostordersPage),
    ComponentsModule,
    DirectivesModule,
  ]

})
export class LostordersPageModule {}
