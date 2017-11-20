import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SidenavComponent component.
 * Add by leo zhang 201710010101
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sidenav',
  templateUrl: 'sidenav.html'
})
export class SidenavComponent {
  openValue: boolean;
  @Output() openChange = new EventEmitter();

  @Input()
  get open() {
    return this.openValue;
  }
  set open(val: boolean) {
    if (this.openValue == val) return;
    this.openValue = val;
    this.openChange.emit(this.openValue);
  }

  constructor() {
    console.log('Hello SidenavComponent Component');
  }

  ngAfterViewInit() {}

}
