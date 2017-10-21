import { Component, Input } from '@angular/core';

@Component({
  selector: 'elastic-line',
  template: `<p class="elastic-line" [ngStyle]="styles"></p>`,
  styles: [`
    :host{
      display: block;
      background: rgba(255, 255, 255, 0.85);
    }
    .elastic-line{
      height: 2px;
      padding: 0;
      margin: 0;
      background:#f76e50;
      -webkit-transition: -webkit-transform .38s;
      -moz-transition: -moz-transform .38s;
      transition: transform .38s;
    }
  `]
})

export class ElasticLine {
  styles: any;
  setctionW: number;
  @Input() lineWidth: number;
  @Input() ratio: number;
  @Input() set progress(index: any) {
    this.styles = this.transform(Number(index));
  }
  constructor() {}

  ngOnInit() {
    this.lineWidth = !this.lineWidth ? this.ratio * 100 : Math.min(this.lineWidth, this.ratio) * 100;
    this.setctionW = this.ratio * 100;
    this.styles = this.transform(0);

  }

  transform(index) {
    let x = this.setctionW * index + (this.setctionW - this.lineWidth) / 2 + 'vw';
    return {
      'width': this.lineWidth + 'vw',
      'transform': 'translateX(' + x + ')',
      '-webkit-transform': 'translateX(' + x + ')',
    }
  }
}
