import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindpwdPage } from './findpwd';
import { ComponentsModule } from '../../components';
import { ValidationProvider } from "../../providers/validation/validation";
@NgModule({
  declarations: [
    FindpwdPage,
  ],
  imports: [
    IonicPageModule.forChild(FindpwdPage),
    ComponentsModule
  ],
  providers: [
    ValidationProvider
  ]
})
export class FindPwdPageModule {}
