import { NgModule, ErrorHandler, enableProdMode } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { StudentApp } from './app.component';
import * as Icon from 'iconcolorful';

//enableProdMode();
Icon.enableColorful();
// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';

/**
 *page module
 */
// import { HomePageModule } from '../pages/home/home.module';
//import { LoginPageModule } from '../pages/login/login.module';
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
import { ComponentsModule } from '../components';

/**
 *provider
 */
// import { TabsProvider } from '../providers/tabs/tabs';
// import { HomeProvider } from '../providers/home';

import { HttpProvider } from '../providers/http';
import { HttpHandler } from '../providers/httpHandler';
import { Constant } from '../providers/constant';
import { UserProvider } from '../providers/user';
import { NativeProvider } from '../providers/native';
import { PersonalProvider } from '../providers/personal/personal';
import { StaticProvider } from '../providers/static/static';
import { SharedProvider } from '../providers/shared/shared';
//import { AnalysisProvider } from '../providers/analysis/analysis';
//import { ReportProvider } from '../providers/report/report';

//import { GradeProvider } from '../providers/static/grade';
//import { TradeProvider } from '../providers/trade/trade';


@NgModule({
  declarations: [
    StudentApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(StudentApp, {
      backButtonText: '',
      iconMode: 'ios',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      tabsHideOnSubPages: true,
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    }),
    ComponentsModule,
    //LoginPageModule,
    TabsModule,
    // HomePageModule,
    // UsercenterPageModule,
    // NewsPageModule,
    IonicStorageModule.forRoot(),
    HttpModule,



  ],
  bootstrap: [IonicApp],
  entryComponents: [
    StudentApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HTTP,
    HttpProvider,
    HttpHandler,
    Constant,
    UserProvider,
    NativeProvider,

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
    //AnalysisProvider,
    //GradeProvider,
  ]
})
export class AppModule {}
