import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { Transition } from './transition/transition';
import { LazyLoader } from './lazyloader/lazyloader';
import { Iscroll } from './iscroll/iscroll';
import { ScrollheaderComponent } from './scrollheader/scrollheader';
import { SubmitonComponent } from './submiton/submiton';
import { Loading } from './loading/loading';
import { SidenavComponent } from './sidenav/sidenav';
import { CouponComponent } from './coupon/coupon';
import { PaymentComponent } from './payment/payment';
import { UploadimgComponent } from './uploadimg/uploadimg';
import { AgreecheckComponent } from './agreecheck/agreecheck';
import { CoinComponent } from './coin/coin';
import { PhotosviewerComponent } from '../components/photosviewer/photosviewer';
@NgModule({
  declarations: [
    LazyLoader,
    Iscroll,
    ScrollheaderComponent,
    SubmitonComponent,
    Transition,
    Loading,
    SidenavComponent,
    CouponComponent,
    PaymentComponent,
    UploadimgComponent,
    AgreecheckComponent,
    CoinComponent,
    PhotosviewerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    LazyLoader,
    Iscroll,
    ScrollheaderComponent,
    SubmitonComponent,
    Transition,
    Loading,
    SidenavComponent,
    CouponComponent,
    PaymentComponent,
    UploadimgComponent,
    AgreecheckComponent,
    CoinComponent,
    PhotosviewerComponent
  ],
  entryComponents: [
    PhotosviewerComponent
  ]
})
export class ComponentsModule {}
