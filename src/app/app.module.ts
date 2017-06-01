import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CustomCounterComponent } from './custom.counter.component'
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,CustomCounterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
