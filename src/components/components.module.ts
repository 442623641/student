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
import { ModalComponent } from './modal/modal';
import { SidenavComponent } from './sidenav/sidenav';
//import { PhotosviewerComponent } from './photosviewer/photosviewer';
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
    ModalComponent,
    SidenavComponent,
    //PhotosviewerComponent,
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
    ModalComponent,
    SidenavComponent,
    //PhotosviewerComponent,
    // RocketComponent,
  ],
})
export class ComponentsModule {}
