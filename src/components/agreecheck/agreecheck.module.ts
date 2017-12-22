import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreecheckComponent } from './agreecheck';
import { DirectivesModule } from '../../directives/directives.module';
import { IonicModule } from 'ionic-angular';
@NgModule({
  declarations: [
    AgreecheckComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    DirectivesModule,
  ],
  exports: [
    AgreecheckComponent,
  ],
})
export class AgreecheckComponentModule {}
