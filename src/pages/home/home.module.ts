import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { HomePage } from './home';
import { ExamsPageModule } from '../exams/exams.module';
import { AnalysisPageModule } from '../analysis/analysis.module';
import { HomeProvider } from '../../providers/home';

import { ComponentsModule } from '../../components';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicModule,
    IonicPageModule.forChild(HomePage),
    ExamsPageModule,
    //ChartsModule,
    //EchartsNg2Module,
    ComponentsModule,
    DirectivesModule,
    AnalysisPageModule,
  ],
  providers: [
    HomeProvider,
  ]
})
export class HomePageModule {}
