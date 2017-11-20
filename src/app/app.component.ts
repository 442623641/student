import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../core/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UserProvider } from '../providers/user';
import { HttpHandler } from '../providers/httpHandler';
@Component({
  template: '<ion-nav [root]="rootPage" #rootNav></ion-nav>'
})

export class StudentApp {
  @ViewChild('rootNav') rootNav: NavController;
  rootPage: any; //= TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private userProvider: UserProvider,
    public httpHandler: HttpHandler) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      platform.is('ios') ? statusBar.styleLightContent() : statusBar.styleDefault();
      //splashScreen.hide();
      this.httpHandler.handleAuth$.subscribe(info => this.rootNav.setRoot(LoginPage, {}, { animation: 'md-transition', animate: true }));

      this.login();
    });
  }

  private login() {
    //this.handler();
    return this.userProvider.getLogin().then(login => {
      if (login && login.usercode && login.pwd) {
        return this.userProvider.login(login).then(res =>
          res.token ?
          this.userProvider.initialize(res, login).then(() => this.goTabsPage()) :
          this.goLoginPage()
        ).catch(() => this.goLoginPage());
      } else {
        this.goLoginPage();
      }
    });
  }

  private goLoginPage() {
    this.rootPage = LoginPage;
    setTimeout(() => this.splashScreen.hide(), 300);
  }

  private goTabsPage() {
    this.rootPage = TabsPage;
    setTimeout(() => this.splashScreen.hide(), 300);
  }

  private goWelcomePage() {
    //this.rootPage = WelcomePage;
    setTimeout(() => this.splashScreen.hide(), 300);
  }


}
