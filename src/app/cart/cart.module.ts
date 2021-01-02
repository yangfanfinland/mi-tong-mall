import { NgModule } from '@angular/core';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../shared';
import { CartContainerComponent } from './components';

@NgModule({
    declarations: [CartContainerComponent],
    imports: [SharedModule, CartRoutingModule]
})
export class CartModule {}