import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';

/*
  import { Http } from '@angular/http';
  Generated class for the ExcellentProvider provider.
  Add by leo zhang 201710010101
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExcellentProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello ExcellentProvider Provider');
  }


  index(data) {
    return this.http.get('question/schoolquestion', data);
  }

}
