import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PersonalPage } from '../pages/personal/personal';
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
      statusBar.styleLightContent();
      if (platform.is('android')) {
        statusBar.backgroundColorByHexString("#f66e4f");
      }
      //splashScreen.hide();
      this.httpHandler.handleAuth$.subscribe(info => this.rootNav.setRoot(LoginPage, {}, { animate: true, animation: 'md-transition', direction: 'back' }));

      this.login();
    });
  }

  private login() {
    return this.userProvider.getLogin().then(login => {
      login && login.usercode && login.pwd ?
        this.userProvider.login(login).then(res => this.to(!res || !res.token ? LoginPage : res.school ? TabsPage : PersonalPage)).catch(() => this.to(LoginPage)) :
        this.to(LoginPage);
    });
  }

  to(page: any) {
    this.rootPage = page;
    setTimeout(() => this.splashScreen.hide(), 300);
  }


}
