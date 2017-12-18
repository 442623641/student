import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import { Subject } from 'rxjs/Subject';
/*
  Generated class for the PersonalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonalProvider {
  private schoolSource = new Subject < any > ();
  private refreshSource = new Subject < any > ();
  schoolChecked$ = this.schoolSource.asObservable();
  refresh$ = this.refreshSource.asObservable();
  constructor(public http: HttpProvider) {
    console.log('Hello PersonalProvider Provider');
  }

  schoolChecked(obj ? ) {
    this.schoolSource.next(obj);
  }
  refresh(obj ? ) {
    this.refreshSource.next(obj);
  }

  schools(data) {
    return this.http.get('userinfo/schools', data);
  }

  update(data) {
    return this.http.post('userinfo/updateinfo', data);
  }

}
