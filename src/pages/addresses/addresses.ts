import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ADDRESS_PAGE } from "../pages.constants";
import { AddressProvider } from '../../providers/address/address';
import { NativeProvider } from '../../providers/native';
/**
 * Generated class for the AddressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addresses',
  templateUrl: 'addresses.html',
})
export class AddressesPage {
  items: any[] = [];
  address = ADDRESS_PAGE;
  onChangeSub: any;
  index: number;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private addressPro: AddressProvider,
    private nativePro: NativeProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressesPage');
    this.addresses();

  }
  private addresses() {
    this.addressPro.addresses().then(res => {
      this.items = res;
      this.items.find(item => { return item.checked }) || (this.items[0].checked = true);
    });
  }
  checked(index) {
    this.items = this.items.map((a, i) => {
      a.checked = index == i;
      return a;
    })
  }
  remove(index) {
    this.nativePro.confirm("确认删除吗，删除后不可恢复", ['取消', '删除']).then(btn => {
      btn && this.addressPro.remove(this.items[index]).then(res => {
        this.addresses();
      })
    })

  }

  edit(address ? ) {
    this.navCtrl.push(ADDRESS_PAGE, address).then(res => {
      this.onChangeSub = this.addressPro.$onChange.subscribe(res => {
        this.addresses();
      });
    });
  }
  ionViewDidEnter() {
    this.onChangeSub && this.onChangeSub.unsubscribe();
  }

  ionViewDidLeave() {
    this.addressPro.change(this.items.find(item => { return item.checked }) || {});
  }
}
