import { Component, Input } from '@angular/core';

/**
 * Generated class for the SubmitonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'submiton',
  templateUrl: 'submiton.html'
})
export class SubmitonComponent {
  state: string;
  @Input() text: string = '保 存';
  constructor() {
    console.log('Hello SubmitonComponent Component');
  }

  onTap() {
    this.state = this.state ? '' : "processing";
    setTimeout(() => {
      //this.state = 'success';
    }, 3000);
  }

}
