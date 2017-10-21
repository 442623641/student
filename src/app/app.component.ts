import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../core/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UserProvider } from '../providers/user';
@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})

export class StudentApp {
  rootPage: any; //= TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private userProvider: UserProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.hide();
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
