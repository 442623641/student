import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { Rocket } from '../../components/rocket/rocket';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    LoginPage,
    Rocket,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    DirectivesModule,
    ComponentsModule
  ]
})
export class LoginPageModule {}
