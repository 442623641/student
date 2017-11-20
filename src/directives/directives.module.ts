import { NgModule } from '@angular/core';
import { HookDirective } from './hook/hook';
import { ImgviewerDirective } from './imgviewer/imgviewer';
import { ElasticheaderDirective } from './elasticheader/elasticheader';

@NgModule({
  declarations: [HookDirective,
    ImgviewerDirective,
    ElasticheaderDirective
  ],
  imports: [],
  exports: [
    HookDirective,
    ImgviewerDirective,
    ElasticheaderDirective
  ]
})
export class DirectivesModule {}
