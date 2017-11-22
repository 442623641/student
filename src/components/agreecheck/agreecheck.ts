import { AGREEMENT_PAGE } from '../../pages/pages.constants';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  _choose: boolean;
  @Output() changec:EventEmitter<any> = new EventEmitter<any>();
  @Input()
  get choose(){
    return this._choose;
  }
  set choose(val:boolean){
    this._choose=val;
    this.changec.emit(this._choose);
  };
  @Input()  type;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
  ) {}


  agree(){
    this.navCtrl.push( AGREEMENT_PAGE,{ type: this.type});
  }

}
