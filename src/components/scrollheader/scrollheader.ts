import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() items: string[] = [];
  @Output() selectedChange = new EventEmitter();

  selectedValue: number = 0;

  @Input()
  get selected() {
    return this.selectedValue;
  }

  set selected(val: number) {
    this.selectedValue = val;
    this.selectedChange.emit(this.selectedValue);
  }

  constructor() {
    console.log('Hello ScrollheaderComponent Component');
  }

  ngAfterViewInit() {

  }

  tap(i) {
    if (this.selected === i) return;
    this.selected = i;
    //this.onChanged.emit(i);
  }
}
