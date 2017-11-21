import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalPage } from './personal';
import { BindingPageModule } from '../binding/binding.module';


//import { ComponentsModule } from '../../components';
//import { SubmitonComponent } from '../../components/submiton/submiton';
@NgModule({
  declarations: [
    PersonalPage,
    //SubmitonComponent,

  ],
  imports: [
    IonicPageModule.forChild(PersonalPage),
    BindingPageModule
    //ComponentsModule,
  ]
})
export class PersonalPageModule {}
