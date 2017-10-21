import { Component, Input } from '@angular/core';
// declare var require;
// const gsap = require('gsap');//.TimelineMax;

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
  private timeLine: any;
  @Input() state: string;
  // @Input() set state(_state: string) {
  //   this._state = _state;

  // }
  constructor() {
    console.log('Hello RocketComponent Component');
  }
  ngOnInit() {
    //this.timeLine = new Gsap.TimelineMax({ repeat: 0, repeatDelay: 0 });
  }
  public ready(shouldReady: boolean) {
    // this.timeLine.to('.rocket-wrapper', .5, { y: -40, ease: Gsap.Expo.easeOut })
    // .to('.clouds-wrapper', .5, { top: 13, ease: Gsap.Expo.easeOut }, "-=0.5")
    this.state = shouldReady ? "ready" : '';
    //let tl = new Gsap.TimelineMax({ repeat: 0, repeatDelay: 0 });
    // this.timeLine.from('.cloud', 1, { alpha: 0 })
    //   .to('.rocket-wrapper', 3, { y: -400, ease: Gsap.Expo.easeIn })
    //   .to('.cloud', 3, { attr: { cy: 185 }, ease: Gsap.Expo.easeIn }, "-=3")
    //   .set('.cloud', { clearProps: "all" })
    //   .set('.rocket-wrapper', { y: 450 })
    //   .to('.rocket-wrapper', 4, { y: 0, ease: Gsap.Elastic.easeOut.config(0.5, 0.4) })
    //   .to('.trail-wrapper', 2.5, { scaleX: 0.5, scaleY: 0, alpha: 0, ease: Gsap.Expo.easeOut }, "-=2.0")

  }
  public launch(shouldReady: boolean) {
    this.state = "launch";
  }
  public landing() {
    this.state = "landing";
    //setTimeout(() => this.state = '', 3200);

    // this.timeLine.set('.cloud', { clearProps: "all" })
    //   .set('.rocket-wrapper', { y: 450 })
    //   .to('.rocket-wrapper', 4, { y: 0, ease: Gsap.Elastic.easeOut.config(0.5, 0.4) })
    //   .to('.trail-wrapper', 2.5, { scaleX: 0.5, scaleY: 0, alpha: 0, ease: Gsap.Expo.easeOut }, "-=2.0")
  }

}
