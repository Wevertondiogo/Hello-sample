import { HelloSampleModule } from './hello-sample/hello-sample.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HelloSampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
