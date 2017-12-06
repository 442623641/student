import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClaimmodalPage } from './claimmodal';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    ClaimmodalPage,
  ],
  imports: [
    IonicPageModule.forChild(ClaimmodalPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class ClaimmodalPageModule {}
