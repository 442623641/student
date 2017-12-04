import { HttpProvider } from "../http";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ADDRESS } from '../providers.constants';
import { Subject } from 'rxjs/Subject';
/*
  Generated class for the AddressProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddressProvider {
  private addressSource = new Subject < any > ();
  $onChange = this.addressSource.asObservable();

  constructor(
    public http: HttpProvider,
    private storage: Storage
  ) { console.log('Hello AddressProvider Provider') }

  /**
   *上次使用地址
   */
  last() {
    return this.http.get('errorbook/errorbookaddress').then(res => {
      if (res && res.area) {
        res.checked = true;
        return this.add(res);
      }
      return {};
    })
  }
  change(res) {
    res.checked = true;
    this.addressSource.next(res);
  }

  addresses(): Promise < any[] > {
    return this.storage.get(ADDRESS).then((res: any[] = []) => {
      return res || [];
    })
  }

  add(address) {

    return this.addresses().then(res => {
      if (address.id) {
        let index = res.findIndex(item => {
          return item.id == address.id
        });
        index > -1 && res.splice(index, 1, address);
      } else {
        address.id = res.length + 1;
        res.unshift(address);
      }

      return this.storage.set(ADDRESS, res).then(() => {
        this.change(address);
        return address;
      })

    });

  }

  remove(address) {
    return this.addresses().then(res => {
      let index = res.findIndex(item => {
        return item.id == address.id;
      });
      if (index > -1) {
        res.splice(index, 1);
        res.find(x => { return x.checked }) || (res[0].checked = true);
      }
      return this.storage.set(ADDRESS, res).then(() => {
        this.change(res.find(x => { return x.checked }) || {});
        return res;
      });

    });
  }
}
