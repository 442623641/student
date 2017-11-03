import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnalyzingPage } from './enalyzing';
// import { EnalyzingProvider } from '../../providers/enalyzing/enalyzing';
import { ComponentsModule } from '../../components';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    EnalyzingPage,
  ],
  imports: [
    IonicPageModule.forChild(EnalyzingPage),
    ComponentsModule,
    DirectivesModule,

  ],
  // providers: [
  //   EnalyzingProvider,
  // ]


})
export class EnalyzingPageModule {}
