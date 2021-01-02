import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { HomeModule } from './home';
import { ListModule } from './list';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule,AppRoutingModule, HomeModule, ListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
