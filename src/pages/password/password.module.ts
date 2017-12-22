import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordPage } from './password';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
// import { PasswordProvider } from '../../providers/password/password';
@NgModule({
  declarations: [
    PasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordPage),
    ComponentsModule,
    DirectivesModule
  ],
  // providers: [
  //   PasswordProvider,
  // ]
})
export class PasswordPageModule {}
