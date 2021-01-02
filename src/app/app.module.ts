import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { HomeModule } from './home';
import { ListModule } from './list';
import { DetailModule } from './detail';
import { CartModule } from './cart';
import { UserLoginModule } from './userlogin'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    ListModule,
    DetailModule,
    CartModule,
    UserLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
