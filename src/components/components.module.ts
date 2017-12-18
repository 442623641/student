import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { Transition } from './transition/transition';
import { LazyLoader } from './lazyloader/lazyloader';
import { Iscroll } from './iscroll/iscroll';
import { ScrollheaderComponent } from './scrollheader/scrollheader';
import { SubmitonComponent } from './submiton/submiton';
import { Loading } from './loading/loading';
import { AgreecheckComponent } from './agreecheck/agreecheck';
import { CoinComponent } from './coin/coin';
import { PhotosviewerComponent } from './photosviewer/photosviewer';
import { TelComponent } from './tel/tel';
import { CurrencyComponent } from './currency/currency';
import { DirectivesModule } from '../directives/directives.module';


@NgModule({
  declarations: [
    LazyLoader,
    Iscroll,
    ScrollheaderComponent,
    SubmitonComponent,
    Transition,
    Loading,
    AgreecheckComponent,
    CoinComponent,
    PhotosviewerComponent,
    TelComponent,
    CurrencyComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    DirectivesModule,
  ],
  exports: [
    LazyLoader,
    Iscroll,
    ScrollheaderComponent,
    SubmitonComponent,
    Transition,
    Loading,
    AgreecheckComponent,
    CoinComponent,
    PhotosviewerComponent,
    TelComponent,
    CurrencyComponent,
  ],
  entryComponents: [
    PhotosviewerComponent
  ]
})
export class ComponentsModule {}
