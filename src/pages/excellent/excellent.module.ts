import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExcellentPage } from './excellent';
import { EnalyzingProvider } from '../../providers/enalyzing/enalyzing';
import { ComponentsModule } from '../../components/components.module';
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
})
export class ExcellentPageModule {}
