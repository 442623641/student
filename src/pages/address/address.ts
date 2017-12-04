import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StaticProvider } from '../../providers/static/static';
import { AddressProvider } from '../../providers/address/address';
import { NativeProvider } from '../../providers/native';
import { Contacts } from '@ionic-native/contacts';
/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  authForm: FormGroup;
  options: any;
  cityData: any = [];
  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
    staticPro: StaticProvider,
    private addressPro: AddressProvider,
    private nativePro: NativeProvider,
    private contacts: Contacts,
    formBuilder: FormBuilder
  ) {
    this.options = navParams.data || {};
    this.authForm = formBuilder.group({
      tel: [this.options.tel, Validators.compose([Validators.maxLength(11), Validators.required])],
      name: [this.options.name, Validators.compose([Validators.required])],
      address: [this.options.address, Validators.compose([Validators.required])],
      area: [this.options.area, Validators.compose([Validators.required])],
    });
    staticPro.address().then((res) => {
      this.cityData = res;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }
  save(values) {
    console.log(values);
    this.addressPro.add(values);
    this.nativePro.toast("地址保存成功");
    setTimeout(() => this.navCtrl.pop(), 1000);
  }
  pickContact() {
    this.contacts.pickContact()
      .then(res => {
        console.log(res);
        if (!res) return;
        this.authForm.controls.tel.setValue(res.phoneNumbers[0] ? res.phoneNumbers[0].value : '')
        this.authForm.controls.name.setValue(res.displayName);
      })
      .catch(ex => console.log(ex));
  }
}
