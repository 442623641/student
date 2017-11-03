import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ExamsPageModule } from '../exams/exams.module';
import { EnalyzingPageModule } from '../enalyzing/enalyzing.module';
import { ExcellentPageModule } from '../excellent/excellent.module';
import { HomeProvider } from '../../providers/home';
import { EnalyzingProvider } from '../../providers/enalyzing/enalyzing';
import { LostProvider } from '../../providers/lost/lost';
import { ComponentsModule } from '../../components';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    EnalyzingPageModule,
    ExcellentPageModule,
    IonicPageModule.forChild(HomePage),

    ExamsPageModule,
    //ChartsModule,
    //EchartsNg2Module,
    ComponentsModule,
    DirectivesModule,

  ],
  providers: [
    HomeProvider,
    EnalyzingProvider,
    LostProvider,
  ]
})
export class HomePageModule {}
