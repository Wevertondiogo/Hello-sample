import { TextComponent } from './text.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TextComponent],
  imports: [
    CommonModule
  ],
  exports: [TextComponent]
})
export class TextModule { }
