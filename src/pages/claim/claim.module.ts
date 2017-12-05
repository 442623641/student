import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClaimPage } from './claim';
// import { ClaimmodalPage } from '../claimmodal/claimmodal';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    ClaimPage,
    // ClaimmodalPage,
  ],
  imports: [
    IonicPageModule.forChild(ClaimPage),
    ComponentsModule,
    DirectivesModule,
  ],
  // entryComponents: [
  //   ClaimmodalPage
  // ],
  // providers: [
  //   ClaimProvider,
  // ]
})
export class ClaimPageModule {}
