import { NgModule } from '@angular/core';
import { HookDirective } from './hook/hook';
import { ImgviewerDirective } from './imgviewer/imgviewer';

@NgModule({
  declarations: [
    HookDirective,
    ImgviewerDirective,
  ],
  exports: [
    HookDirective,
    ImgviewerDirective,
  ]
})
export class DirectivesModule {}
