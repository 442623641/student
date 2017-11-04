import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExcellentPage } from './excellent';
import { EnalyzingProvider } from '../../providers/enalyzing/enalyzing';
import { ComponentsModule } from '../../components';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    ExcellentPage,
  ],
  imports: [
    IonicPageModule.forChild(ExcellentPage),
    ComponentsModule,
    DirectivesModule,
  ],
  providers: [
    EnalyzingProvider,
  ]
})
export class ExcellentPageModule {}