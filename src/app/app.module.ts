import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { HomeModule } from './home';
import { ProductModule } from './product';
import { DetailModule } from './detail';
import { CartModule } from './cart';
import { ResultModule } from './result'
import { OrderConfirmModule } from './orderconfirm'
import { OrderListModule } from './orderlist'
import { OrderDetailModule } from './orderdetail'
import { UserRegisterModule } from './userregister'
import { UserLoginModule } from './userlogin'
import { UserCenterModule } from './usercenter'
import { UserCenterUpdateModule } from './usercenterupdate'
import { PassUpdateModule } from './passupdate'
import { PassResetModule } from './passreset'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    ProductModule,
    DetailModule,
    CartModule,
    ResultModule,
    OrderConfirmModule,
    OrderListModule,
    OrderDetailModule,
    UserRegisterModule,
    UserLoginModule,
    UserCenterModule,
    UserCenterUpdateModule,
    PassUpdateModule,
    PassResetModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
