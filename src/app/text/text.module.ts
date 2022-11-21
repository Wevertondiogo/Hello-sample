import { TextComponent } from './text.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [TextComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [TextComponent]
})
export class TextModule { }
