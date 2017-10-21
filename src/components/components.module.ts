import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { Transition } from './transition';
import { ElasticLine } from './elasticLine';
import { LazyLoader } from './lazyLoader';
import { Iscroll } from './iscroll';
import { ScrollheaderComponent } from './scrollheader/scrollheader';
import { SubmitonComponent } from './submiton/submiton';
import { Loading } from './loading/loading';
// import { RocketComponent } from './rocket/rocket';

@NgModule({
  declarations: [
    ElasticLine,
    LazyLoader,
    Iscroll,
    ScrollheaderComponent,
    SubmitonComponent,
    Transition,
    Loading,
    // RocketComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ElasticLine,
    LazyLoader,
    Iscroll,
    ScrollheaderComponent,
    SubmitonComponent,
    Transition,
    Loading,
    // RocketComponent,
  ],
})
export class ComponentsModule {}
