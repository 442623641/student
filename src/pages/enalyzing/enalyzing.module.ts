import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnalyzingPage } from './enalyzing';
import { EnalyzingmodalPageModule } from '../enalyzingmodal/enalyzingmodal.module';
// import { EnalyzingProvider } from '../../providers/enalyzing/enalyzing';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    EnalyzingPage,
  ],
  imports: [
    IonicPageModule.forChild(EnalyzingPage),
    ComponentsModule,
    DirectivesModule,
    EnalyzingmodalPageModule,
  ],
})
export class EnalyzingPageModule {}
