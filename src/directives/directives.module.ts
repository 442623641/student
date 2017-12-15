import { NgModule } from '@angular/core';
import { PageDirective } from './analytics/page';
import { EventDirective } from './analytics/event';
import { ImgviewerDirective } from './imgviewer/imgviewer';
import { InputDirective } from './input/input';
//import { PasswordDirective } from './password/password';

@NgModule({
  declarations: [
    PageDirective,
    ImgviewerDirective,
    InputDirective,
    EventDirective
    //PasswordDirective,
  ],
  exports: [
    PageDirective,
    ImgviewerDirective,
    InputDirective,
    EventDirective,
    //PasswordDirective,
  ]
})
export class DirectivesModule {}
