import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

/**
 * Generated class for the ScrollheaderComponent component.
 * Add by leo zhang 201710010101
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'scroll-header',
  templateUrl: 'scrollheader.html'
})
export class ScrollheaderComponent {

  @ViewChild('scroll') scroll: any;
  @Input() items: string[] = [];
  @Output() selectedChange = new EventEmitter();
  @Output() onChanged = new EventEmitter();

  selectedValue: number = 0;

  @Input()
  get selected() {
    return this.selectedValue;
  }

  set selected(val: number) {
    if (this.selectedValue == val) return;
    this.selectedValue = val;
    this.selectedChange.emit(this.selectedValue);
    setTimeout(() => this.onChanged.emit(this.selectedValue), 120);
  }
  offsetLeft: number;

  constructor(private el: ElementRef) {
    console.log('Hello ScrollheaderComponent Component');
  }

  ngAfterViewInit() {
    this.offsetLeft = this.el.nativeElement.offsetParent.offsetLeft;
  }

  tap(event) {
    //console.log(event);
    let index = event.target.getAttribute('index');
    if (this.selected == index || !index && index !== "0") return;
    this.selected = index;
    this.scrollTo(event.target);
    //this.onChanged.emit(i);
  }
  scrollTo(target) {

    let middle = this.scroll.scrollElement.offsetWidth / 2 - target.offsetWidth / 2;
    let rect = target.getBoundingClientRect();
    let x = rect.left - this.offsetLeft - middle;
    console.log(x);
    this.scroll.scrollToX(x);
    //console.log(rect);
    //this.scroll.
  }
}
