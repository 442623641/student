import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgreementPage } from './agreement';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    AgreementPage,
  ],
  imports: [
    IonicPageModule.forChild(AgreementPage),
  ],
})
export class AgreementPageModule {}
