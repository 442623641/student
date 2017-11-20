import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpHandler } from '../../providers/httpHandler';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'loading',
  templateUrl: 'loading.html',
})
export class Loading {
  @Input() status: boolean;
  private state: number = 200;
  private mess: string = "暂无记录";
  constructor(
    private httpHandler: HttpHandler,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.httpHandler.handleError$.subscribe(info => {
      if (!info || !info.status) {
        this.state = 600;
        this.mess = '网路异常，请稍后再试';
      } else {
        this.state = info.status;
        this.mess = info.message || "暂无记录";
      }
    });

    // this.httpHandler.handleAuth$.subscribe(info => {
    //   this.navCtrl.setRoot(LoginPage, {}, { animation: 'md-transition', animate: true });
    // })

    // this.httpHandler.$invoke.subscribe(() => {
    //   this.state = 0;
    // });

    // this.httpHandler.$complete.subscribe(() => {
    //   this.state = 200;
    // });
  }

  complete() {
    this.state = 200;
  }

  exception(info) {
    if (!info || !info.status) {
      this.state = 600;
      this.mess = '网路异常，请稍后再试';
    } else {
      this.state = info.status;
      this.mess = info.message || "暂无记录";
    }
  }
  error(massege) {
    this.state = 400;
    this.mess = massege;
  }
}
