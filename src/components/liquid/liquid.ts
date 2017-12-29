import { Component, Input, ElementRef } from '@angular/core';

/**
 * Generated class for the LiquidComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'liquid',
  templateUrl: 'liquid.html'
})
export class LiquidComponent {
  styles: string;
  percentStr: string;
  _percent: number;
  @Input() score: number;
  @Input() set percent(val) {
    if (val !== undefined) {
      this._percent = val;
      this.percentStr = (val * 100).toFixed(1) + '%';
    }
  }


  constructor(private el: ElementRef) {
    console.log('Hello LiquidComponent Component');
  }
  ngAfterViewInit() {

    let style = document.createElement("style");
    style.innerHTML = `liquid .water::after,liquid .water::before{top: -${(100+this._percent*100).toFixed(1)}% !important}`;
    this.el.nativeElement.insertBefore(style, this.el.nativeElement.firstChild);
  }

}
