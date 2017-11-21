import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonalProvider } from '../../providers/personal/personal';
import { StaticProvider } from '../../providers/static/static';
import { Picker } from '../../model/picker';
import { UserInfo } from '../../model/userInfo';
import { UserProvider } from '../../providers/user';
import { SCHOOLS_PAGE } from '../pages.constants';

/**
 * Generated class for the BindingPage page.
 * Add by leo zhang 201711010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-binding',
  templateUrl: 'binding.html',
})
export class BindingPage {
  pages: any = { schools: SCHOOLS_PAGE }

  address: Picker = { data: [], name: '', code: '' };
  grade: Picker = { data: [], name: '', code: '' };
  userInfo: UserInfo;
  graduated: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public staticPro: StaticProvider,
    public userPro: UserProvider,
    //public personalProvider: AddressProvider
  ) {}

  ngOnInit() {

    this.initialize();
  }

  ngAfterViewInit() {
    //this.initialize();
  }

  /**
   * 获取城市数据
   */
  initialize() {
    Promise.all([ < UserInfo > this.userPro.getUserInfo(), this.staticPro.address(), this.staticPro.grade()]).then(res => {
      this.userInfo = res[0];
      this.address.data = res[1];
      this.grade.data = res[2];
      this.grade.code = this.userInfo.grade;
      this.address.code = this.userInfo.city;
    });
  }

  /**
   * 城市选择器被改变时触发的事件
   * @param event
   */
  addressChange(event) {
    console.log(event);
    this.address.code = event['region'].value;
  }

  /**
   * 城市选择器被改变时触发的事件
   * @param event
   */
  gradeChange(event) {
    console.log(event);
    this.grade.code = event['region'].value;
    this.grade.name = event['region'].text.trim();
  }
}
