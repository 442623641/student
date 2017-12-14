import { NgModule } from '@angular/core';
import { AnalyticsDirective } from './analytics/analytics';
import { ImgviewerDirective } from './imgviewer/imgviewer';
import { InputDirective } from './input/input';
//import { PasswordDirective } from './password/password';

@NgModule({
  declarations: [
    AnalyticsDirective,
    ImgviewerDirective,
    InputDirective,
    //PasswordDirective,
  ],
  exports: [
    AnalyticsDirective,
    ImgviewerDirective,
    InputDirective,
    //PasswordDirective,
  ]
})
export class DirectivesModule {}
