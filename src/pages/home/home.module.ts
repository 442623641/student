import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ExamsPageModule } from '../exams/exams.module';
import { EnalyzingPageModule } from '../enalyzing/enalyzing.module';
import { PackagePageModule } from '../package/package.module';
import { ExcellentPageModule } from '../excellent/excellent.module';
import { UnclaimedexamsPageModule } from '../unclaimedexams/unclaimedexams.module';
import { EnalyzingProvider } from '../../providers/enalyzing/enalyzing';
import { LostProvider } from '../../providers/lost/lost';
import { CouponProvider } from '../../providers/coupon/coupon';

import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    EnalyzingPageModule,
    ExcellentPageModule,
    PackagePageModule,
    IonicPageModule.forChild(HomePage),

    ExamsPageModule,
    UnclaimedexamsPageModule,
    //ChartsModule,
    //EchartsNg2Module,
    ComponentsModule,
    DirectivesModule,

  ],
  providers: [
    EnalyzingProvider,
    LostProvider,
    CouponProvider,
  ]
})
export class HomePageModule {}
