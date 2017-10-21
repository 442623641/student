import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import 'rxjs/add/operator/map';

/*
	import { Http } from '@angular/http';
  Generated class for the AnalysisProvider provider.
  Add by leo zhang 201710010101
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnalysisProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello AnalysisProvider Provider');
  }

}
