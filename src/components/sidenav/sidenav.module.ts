import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { SidenavComponent } from './sidenav';
import { ComponentsModule } from '../components.module';
@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
  ],
  exports: [
    SidenavComponent,
  ],
})
export class SidenavComponentModule {}
