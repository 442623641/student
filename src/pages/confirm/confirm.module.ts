import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmPage } from './confirm';
import { NewPwdProvider } from '../../providers/newpwd/newpwd';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmPage),
  ],
  providers: [
    NewPwdProvider
  ]
})
export class ConfirmPageModule {}
