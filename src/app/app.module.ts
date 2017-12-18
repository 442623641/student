import { NgModule, ErrorHandler, enableProdMode } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { StudentApp } from './app.component';
import * as Icon from 'iconcolorful';
enableProdMode();
Icon.enableColorful();

/*
 * native plugins
 */
import { HTTP } from '@ionic-native/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Toast } from '@ionic-native/toast';
import { Dialogs } from '@ionic-native/dialogs';
import { CallNumber } from '@ionic-native/call-number';
import { ActionSheet } from '@ionic-native/action-sheet';
import { FilePath } from '@ionic-native/file-path';
import { Contacts } from '@ionic-native/contacts';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AppVersion } from '@ionic-native/app-version';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';
import { Camera } from '@ionic-native/camera';
/**
 *Providers
 */
import { ComponentsModule } from '../components/components.module';
import { HttpProvider } from '../providers/http';
import { HttpHandler } from '../providers/httpHandler';
import { HomeProvider } from '../providers/home';
import { UserProvider } from '../providers/user';
import { NativeProvider } from '../providers/native';
import { PersonalProvider } from '../providers/personal/personal';
import { StaticProvider } from '../providers/static/static';
import { EnalyzingProvider } from '../providers/enalyzing/enalyzing';
import { ExcellentProvider } from '../providers/excellent/excellent';
import { PaymentProvider } from '../providers/payment/payment';
import { SeptnetpayProvider } from '../providers/payment/septnetpay';
import { LostProvider } from '../providers/lost/lost';
import { PackageProvider } from '../providers/package/package';
import { NotifyProvider } from '../providers/notify/notify';


import { ExamsProvider } from '../providers/exams/exams';
import { ChartsProvider } from '../providers/charts/charts';
import { ClaimProvider } from '../providers/claim/claim';
import { CouponProvider } from '../providers/coupon/coupon';
import { PasswordProvider } from '../providers/password/password';
import { MessageProvider } from '../providers/message/message';
import { TradesProvider } from '../providers/trades/trades';
import { DoctorProvider } from '../providers/doctor/doctor';
import { AddressProvider } from '../providers/address/address';
import { BrowserProvider } from '../providers/browser/browser';

import { AppProvider } from '../providers/app/app';
import { MobclickagentProvider } from '../providers/app/mobclickagent';
import { HardbackProvider } from '../providers/app/hardback';
import { UpgradeProvider } from '../providers/app/upgrade';
@NgModule({
  declarations: [
    StudentApp,
    //PhotosviewerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(StudentApp, {
      backButtonText: '',
      mode: 'ios',
      iconMode: 'ios',
      tabsPlacement: 'bottom',
      modalEnter: 'modal-md-slide-in',
      modalLeave: 'modal-md-slide-out',
      tabsHideOnSubPages: true,
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false,
      spinner: 'ios-small',
      //pageTransitionDelay: '16'
    }),
    ComponentsModule,
    IonicStorageModule.forRoot(),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    StudentApp,
    //PhotosviewerComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    /*
     * native plugins
     */
    ActionSheet,
    SplashScreen,
    Toast,
    Dialogs,
    StatusBar,
    CallNumber,
    HTTP,
    Contacts,
    SpinnerDialog,
    SocialSharing,
    AppVersion,
    FileOpener,
    File,
    FilePath,
    ThemeableBrowser,
    Camera,

    /*
     * request service
     */
    HttpProvider,
    HttpHandler,
    HomeProvider,
    UserProvider,
    PaymentProvider,
    SeptnetpayProvider,
    NativeProvider,
    ExamsProvider,
    ChartsProvider,
    ClaimProvider,
    PersonalProvider,
    StaticProvider,
    EnalyzingProvider,
    ExcellentProvider,
    LostProvider,
    PackageProvider,
    NotifyProvider,
    EnalyzingProvider,
    LostProvider,
    CouponProvider,
    PasswordProvider,
    MessageProvider,
    TradesProvider,
    AddressProvider,
    DoctorProvider,
    BrowserProvider,

    AppProvider,
    HardbackProvider,
    UpgradeProvider,
    MobclickagentProvider,
  ]
})
export class AppModule {}
