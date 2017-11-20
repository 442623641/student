import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnalyzingPage } from './enalyzing';
import { EnalyzingmodalPage } from '../enalyzingmodal/enalyzingmodal';
// import { EnalyzingProvider } from '../../providers/enalyzing/enalyzing';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    EnalyzingPage,
    EnalyzingmodalPage,
  ],
  imports: [
    IonicPageModule.forChild(EnalyzingPage),
    //IonicPageModule.forChild(EnalyzingmodalPage),
    ComponentsModule,
    DirectivesModule,

  ],
  // exports: [
  //   EnalyzingmodalPage,
  // ],
  entryComponents: [
    EnalyzingmodalPage
  ],
  // providers: [
  //   EnalyzingProvider,
  // ]


})
export class EnalyzingPageModule {}
