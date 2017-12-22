import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidationmodalPage } from './validationmodal';
import { ValidationProvider } from '../../providers/validation/validation';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    ValidationmodalPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidationmodalPage),
    ComponentsModule,
    DirectivesModule,
  ],
  providers: [
    ValidationProvider
  ]

})
export class ValidationmodalPageModule {}
