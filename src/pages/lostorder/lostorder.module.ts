import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostorderPage } from './lostorder';
import { LostguidePageModule } from '../lostguide/lostguide.module';
//import { lostorderProvider } from '../../providers/lostorder/lostorder';
//import { LostguidePage } from '../lostguide/lostguide';
import { ComponentsModule } from '../../components/components.module';
//import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    LostorderPage,
    //LostguidePage
  ],
  imports: [
    //IonicPageModule.forChild(LostguidePage),
    IonicPageModule.forChild(LostorderPage),
    LostguidePageModule,
    ComponentsModule,
    //DirectivesModule,

  ]

})
export class LostorderPageModule {}
