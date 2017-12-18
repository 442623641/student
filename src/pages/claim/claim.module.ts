import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClaimPage } from './claim';
//import { ClaimmodalPageModule } from '../claimmodal/claimmodal.module';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    ClaimPage,
  ],
  imports: [
    IonicPageModule.forChild(ClaimPage),
    ComponentsModule,
    DirectivesModule,
    //ClaimmodalPageModule,
  ],
})
export class ClaimPageModule {}
