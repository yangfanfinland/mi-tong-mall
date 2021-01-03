import { NgModule } from '@angular/core';
import { OrderConfirmRoutingModule } from './orderconfirm-routing.module';
import { SharedModule } from '../shared';
import { OrderConfirmContainerComponent } from './components';

@NgModule({
    declarations: [OrderConfirmContainerComponent],
    imports: [SharedModule, OrderConfirmRoutingModule]
})
export class OrderConfirmModule {}