import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnalyzingPage } from './enalyzing';
import { SidenavComponentModule } from '../../components/sidenav/sidenav.module';
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
    SidenavComponentModule,
  ],
})
export class EnalyzingPageModule {}
