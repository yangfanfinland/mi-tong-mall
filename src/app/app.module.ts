import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { HomeModule } from './modules/home';
import { ProductModule } from './modules/product';
import { DetailModule } from './modules/detail';
import { CartModule } from './modules/cart';
import { ResultModule } from './modules/result'
import { OrderConfirmModule } from './modules/orderconfirm'
import { UserModule } from './modules/user'
import { CenterModule } from './modules/center'
import { PassResetModule } from './modules/passreset'
import { PaymentModule } from './modules/payment'
import { AboutModule } from './modules/about'
import { userReducer } from './store/user.reducer'



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ user: userReducer }),
    MaterialModule,
    MatSnackBarModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    ProductModule,
    DetailModule,
    CartModule,
    ResultModule,
    OrderConfirmModule,
    UserModule,
    CenterModule,
    PassResetModule,
    PaymentModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
