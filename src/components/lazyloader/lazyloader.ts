import { Component, Input } from '@angular/core';

@Component({
  selector: 'img-lazy',
  templateUrl: 'lazyloader.html',
})

export class LazyLoader {
  state: number = 0;
  // dx:any;
  // dy:any;
  @Input() src: string;
  @Input() alt: string;
  timer: any;
  constructor() {}

  refresh() {
    if (!this.state) return;
    this.timer = setTimeout(() => {
      this.state = -1;
    }, 3600);

    this.state = 0;
  }

  onLoad() {
    clearTimeout(this.timer);
    this.state = 1;
  }

  onError() {
    if (this.alt && (this.alt.indexOf('http://') > -1 || this.alt.indexOf('https://') > -1)) this.alt = null;
    clearTimeout(this.timer);
    this.state = -1;
  }
}
