import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicsPage } from '../topics/topics';
import { DoctorPage } from './doctor';
import { EchartsNg2Module } from 'echarts-ng2';
import { DoctorProvider } from '../../providers/doctor/doctor';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components';
//import { ScrollheaderComponent } from '../../components/scrollheader/scrollheader';
//import { LazyLoader } from '../../components/lazyLoader';
//import { TopicsPageModule } from '../topics/topics.module';

@NgModule({
  declarations: [
    DoctorPage,
    TopicsPage,
    //ScrollheaderComponent,
    //LazyLoader,
  ],
  imports: [

    IonicPageModule.forChild(TopicsPage),
    IonicPageModule.forChild(DoctorPage),
    //IonicPageModule.forChild(TopicsPage),
    EchartsNg2Module,
    PipesModule,
    ComponentsModule,
    //TopicsPageModule,

  ],
  exports: [
    //ScrollheaderComponent,
    //LazyLoader,
  ],
  providers: [
    DoctorProvider
  ],
})
export class DoctorPageModule {}
