import { Component } from '@angular/core';

/**
 * Generated class for the MreportComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mreport',
  templateUrl: 'mreport.html'
})
export class MreportComponent {

  text: string;

  constructor() {
    console.log('Hello MreportComponent Component');
    this.text = 'Hello World';
  }

}
