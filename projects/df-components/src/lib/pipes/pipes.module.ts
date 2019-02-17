import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SplitCasePipe } from './split-case.pipe';
import { TruncatePipe } from './truncate.pipe';
import { NiceNamePipe } from './nice-name.pipe';

const PIPES = [
  SplitCasePipe,
  SafeHtmlPipe,
  NiceNamePipe,
  TruncatePipe
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...PIPES
  ],
  exports: [
    ...PIPES
  ]
})
export class PipesModule { }
