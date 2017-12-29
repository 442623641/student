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

  @Input() option: { score: number, percent: number } = { score: 0, percent: 100 };
  percent: string = '0%';

  constructor(private el: ElementRef) {
    console.log('Hello LiquidComponent Component');
  }
  ngAfterViewInit() {
    this.percent = (this.option.percent * 100).toFixed(1) + '%';
    let style = document.createElement("style");
    style.innerHTML = `liquid .water::after,liquid .water::before{top: -${(100+this.option.percent*100).toFixed(1)}% !important}`;
    this.el.nativeElement.insertBefore(style, this.el.nativeElement.firstChild);
  }

}
