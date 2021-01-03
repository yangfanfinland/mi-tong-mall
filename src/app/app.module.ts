import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { HomeModule } from './home';
import { ProductModule } from './product';
import { DetailModule } from './detail';
import { CartModule } from './cart';
import { UserLoginModule } from './userlogin'
import { ResultModule } from './result'
import { OrderConfirmModule } from './orderconfirm'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    ProductModule,
    DetailModule,
    CartModule,
    UserLoginModule,
    ResultModule,
    OrderConfirmModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
