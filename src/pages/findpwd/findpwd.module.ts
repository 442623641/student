import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindpwdPage } from './findpwd';
import { ComponentsModule } from '../../components';
@NgModule({
  declarations: [
    FindpwdPage,
  ],
  imports: [
    IonicPageModule.forChild(FindpwdPage),
    ComponentsModule
  ]
})
export class FindPwdPageModule {}
