import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { Transition } from './transition/transition';
import { LazyLoader } from './lazyloader/lazyloader';
import { Iscroll } from './iscroll/iscroll';
import { ScrollheaderComponent } from './scrollheader/scrollheader';
import { SubmitonComponent } from './submiton/submiton';
import { Loading } from './loading/loading';
import { ModalComponent } from './modal/modal';
import { SidenavComponent } from './sidenav/sidenav';
import { CouponComponent } from './coupon/coupon';
import { PaymentComponent } from './payment/payment';

@NgModule({
  declarations: [
    LazyLoader,
    Iscroll,
    ScrollheaderComponent,
    SubmitonComponent,
    Transition,
    Loading,
    ModalComponent,
    SidenavComponent,
    CouponComponent,
    PaymentComponent,
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
    ModalComponent,
    SidenavComponent,
    CouponComponent,
    PaymentComponent,
  ],
})
export class ComponentsModule {}
