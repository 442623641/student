//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import { Storage } from '@ionic/storage';
import { PACKAGE } from '../providers.constants';
/*
  Generated class for the PackageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PackageProvider {
  _default: number;
  constructor(
    public http: HttpProvider,
    private storage: Storage,

  ) {
    console.log('Hello PackageProvider Provider');
  }

  default () {
    if (this._default) {
      return Promise.resolve(this._default);
    } else {
      return this.options().then(res => {
        return this._default;
      })
    }
  }

  options(data: { type: string } = { type: 'pa' }) {
    if (this._default) {
      return this.locals();
    }
    return this.http.post('payment/getxbz', data).then(res => {
      this.storage.set(PACKAGE, res);
      this._default = res.find(item => { return item.year == 1 });
      return res;
    });
  }

  locals() {
    return this.storage.get(PACKAGE);
  }

  payment() {

  }

}
