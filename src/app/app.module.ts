import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyMainComponent } from './body-main/body-main.component';
import { BodySideComponent } from './body-side/body-side.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyMainComponent,
    BodySideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
