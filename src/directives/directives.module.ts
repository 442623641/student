import { NgModule } from '@angular/core';
import { PageDirective } from './analytics/page';
import { EventDirective } from './analytics/event';
import { ImgviewerDirective } from './imgviewer/imgviewer';
import { InputDirective } from './input/input';

@NgModule({
  declarations: [
    PageDirective,
    ImgviewerDirective,
    InputDirective,
    EventDirective
  ],
  exports: [
    PageDirective,
    ImgviewerDirective,
    InputDirective,
    EventDirective,
  ]
})
export class DirectivesModule {}
