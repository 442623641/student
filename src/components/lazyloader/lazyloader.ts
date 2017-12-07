import {Component, Input } from '@angular/core';

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
  constructor() {
  }

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

/**
 * 图片任意拖拽功能
 */
// onTouch(event){
//    this.startX=event.target.offsetLeft;
//    this.startY=event.target.offsetTop;
// }


//  onDrag(event){
//   this.dx =event.gesture.deltaX;
//   this.dy=event.gesture.deltaY;
//   event.target.style.transform= 'translateX(dx)';
//   event.target.style.transform= 'translateY(dy)';
// }
//   [ngStyle]="{ transform: 'translate3d(dx,dy,0)'}"


}
