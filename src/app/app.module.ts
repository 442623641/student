import { NgModule, ErrorHandler, enableProdMode } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
//import {HttpClientModule} from '@angular/common/http';

import { StudentApp } from './app.component';

import * as Icon from 'iconcolorful';

enableProdMode();
Icon.enableColorful();
// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';

/**
 *page module
 */
import { PersonalPageModule } from '../pages/personal/personal.module';
import { LoginPageModule } from '../pages/login/login.module';
// import { UsercenterPageModule } from '../pages/usercenter/usercenter.module';
// import { NewsPageModule } from '../pages/news/news.module';

import { TabsModule } from '../core/tabs/tabs.module';
/*
 * native plugins
 */

import { HTTP } from '@ionic-native/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Toast } from '@ionic-native/toast';
import { Dialogs } from '@ionic-native/dialogs';


/**
 *Components module
 */
// import { Loading } from '../components/loading/loading'
import { ComponentsModule } from '../components/components.module';
import { PhotosviewerComponent } from '../components/photosviewer/photosviewer';
/**
 *provider
 */
// import { TabsProvider } from '../providers/tabs/tabs';
// import { HomeProvider } from '../providers/home';

import { HttpProvider } from '../providers/http';
import { HttpHandler } from '../providers/httpHandler';
import { HomeProvider } from '../providers/home';
import { Constant } from '../providers/constant';
import { UserProvider } from '../providers/user';
import { NativeProvider } from '../providers/native';
import { PersonalProvider } from '../providers/personal/personal';
import { StaticProvider } from '../providers/static/static';
import { SharedProvider } from '../providers/shared/shared';
import { EnalyzingProvider } from '../providers/enalyzing/enalyzing';
import { ExcellentProvider } from '../providers/excellent/excellent';
import { PaymentProvider } from '../providers/payment/payment';
import { SeptnetpayProvider } from '../providers/payment/septnetpay';
import { LostProvider } from '../providers/lost/lost';
import { PackageProvider } from '../providers/package/package';
/*
add by chen 17-11-21
 */
import { MessageProvider } from '../providers/message/message';
import { ValidationProvider } from '../providers/validation/validation';
import { UploadImgProvider } from "../providers/uploadimg/uploadimg";


/*----------------------------------------------*/
//import { AnalysisProvider } from '../providers/analysis/analysis';
//import { ReportProvider } from '../providers/report/report';

//import { GradeProvider } from '../providers/static/grade';
//import { TradeProvider } from '../providers/trade/trade';


@NgModule({
  declarations: [
    StudentApp,
    PhotosviewerComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //HttpClientModule,
    IonicModule.forRoot(StudentApp, {
      backButtonText: '',
      mode: 'ios',
      iconMode: 'ios',
      tabsPlacement: 'bottom',
      modalEnter: 'modal-md-slide-in',
      modalLeave: 'modal-md-slide-out',
      //pageTransition: 'ios-transition',
      tabsHideOnSubPages: true,
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    }),
    ComponentsModule,
    LoginPageModule,
    TabsModule,
    PersonalPageModule,
    // UsercenterPageModule,
    // NewsPageModule,
    IonicStorageModule.forRoot(),




  ],
  bootstrap: [IonicApp],
  entryComponents: [
    StudentApp,
    PhotosviewerComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpProvider,
    HttpHandler,
    HomeProvider,
    Constant,
    UserProvider,
    PaymentProvider,
    SeptnetpayProvider,
    NativeProvider,
    /*
     added by chen
     */
    MessageProvider,
    ValidationProvider,
    UploadImgProvider,
    /*
     * native plugins
     */
    SplashScreen,
    Toast,
    Dialogs,
    StatusBar,

    HTTP,
    PersonalProvider,
    StaticProvider,
    SharedProvider,
    EnalyzingProvider,
    ExcellentProvider,
    LostProvider,
    PackageProvider,
    //PaymentProvider,
    //AnalysisProvider,
    //GradeProvider,
  ]
})
export class AppModule {}
