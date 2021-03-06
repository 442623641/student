import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidationPage } from './validation';
import { ValidationProvider } from '../../providers/validation/validation';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { AgreecheckComponentModule } from '../../components/agreecheck/agreecheck.module';

@NgModule({
  declarations: [
    ValidationPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidationPage),
    ComponentsModule,
    DirectivesModule,
    AgreecheckComponentModule,
  ],
  providers: [
    ValidationProvider
  ]
})
export class ValidationPageModule {}
