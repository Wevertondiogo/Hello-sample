import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloSampleComponent } from './hello-sample.component';

@NgModule({
  declarations: [HelloSampleComponent],
  imports: [
    CommonModule
  ],
  exports: [HelloSampleComponent],
})
export class HelloSampleModule { }
