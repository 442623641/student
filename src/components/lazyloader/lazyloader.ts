import { Component, Input } from '@angular/core';

@Component({
  selector: 'img-lazy',
  templateUrl: 'lazyloader.html',
})

export class LazyLoader {
  state: number = 0;
  @Input() src: string;
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
    clearTimeout(this.timer);
    this.state = -1;
  }
}
