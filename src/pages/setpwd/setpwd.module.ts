import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetpwdPage } from './setpwd';
import { ValidationProvider } from "../../providers/validation/validation";
import { NativeProvider } from '../../providers/native';
@NgModule({
  declarations: [
    SetpwdPage,
  ],
  imports: [
    IonicPageModule.forChild(SetpwdPage),
  ],
  providers:[
    ValidationProvider,
    NativeProvider
  ]
})
export class SetpwdPageModule {}
