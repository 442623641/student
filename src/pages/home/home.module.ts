import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ExamsPageModule } from '../exams/exams.module';
import { ClaimmodalPage } from '../claimmodal/claimmodal';
//import { EnalyzingPageModule } from '../enalyzing/enalyzing.module';
//import { PackagePageModule } from '../package/package.module';
//import { ExcellentPageModule } from '../excellent/excellent.module';

//import { ElostPageModule } from '../elost/elost.module';
//import { UnclaimedexamsPageModule } from '../unclaimedexams/unclaimedexams.module';
//import { ClaimPageModule } from '../claim/claim.module'

// import { EnalyzingProvider } from '../../providers/enalyzing/enalyzing';
// import { LostProvider } from '../../providers/lost/lost';
// import { CouponProvider } from '../../providers/coupon/coupon';

import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    HomePage,
    ClaimmodalPage,
  ],
  imports: [
    //EnalyzingPageModule,
    //ExcellentPageModule,
    //PackagePageModule,
    IonicPageModule.forChild(HomePage),
    ExamsPageModule,
    //ClaimPageModule,
    //ElostPageModule,
    ComponentsModule,
    DirectivesModule,

  ],
  entryComponents: [
    ClaimmodalPage
  ],
  // providers: [
  //   EnalyzingProvider,
  //   LostProvider,
  //   CouponProvider,
  // ]
})
export class HomePageModule {}
