import { AGREEMENT_PAGE } from '../../pages/pages.constants';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the AgreecheckComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'agreecheck',
  templateUrl: 'agreecheck.html'
})
export class AgreecheckComponent {
  checkValue: boolean;
  @Output() checkChange = new EventEmitter();
  @Input()  type;
  @Input()
  get check(){
    return this.checkValue;
  }
  set check(val:boolean){
    if (this.checkValue == val) return;
    this.checkValue=val;
    this.checkChange.emit(this.checkValue);
  };
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
  ) {}


  agree(){
    this.checkValue=true;
    this.checkChange.emit(this.checkValue);
    this.navCtrl.push( AGREEMENT_PAGE,{ type: this.type});
  }

}
