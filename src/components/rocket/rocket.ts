import { Component, Input } from '@angular/core';

/**
 * Generated class for the RocketComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rocket',
  templateUrl: 'rocket.html'
})
export class Rocket {
  @Input() state: string;
  constructor() {
    console.log('Hello RocketComponent Component');
  }
  public ready(shouldReady: boolean) {
    this.state = shouldReady ? "ready" : '';

  }
  public launch(shouldReady: boolean) {
    this.state = "launch";
  }
  public landing() {
    this.state = "landing";
  }

}
