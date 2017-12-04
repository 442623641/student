import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// import { PasswordPageModule } from '../password/password.module';
// import { AgreementPageModule } from '../agreement/agreement.module';

import { ValidationPage } from './validation';
import { ValidationProvider } from '../../providers/validation/validation';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ValidationPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidationPage),
    // AgreementPageModule,
    // PasswordPageModule,
    ComponentsModule,
  ],
  providers: [
    ValidationProvider
  ]
})
export class ValidationPageModule {}
