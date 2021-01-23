import { NgModule } from '@angular/core';
import { OrderConfirmRoutingModule } from './orderconfirm-routing.module';
import { SharedModule } from '../../shared';
import { OrderConfirmContainerComponent } from './components';
import { MaterialModule } from '../../material';

@NgModule({
    declarations: [OrderConfirmContainerComponent],
    imports: [SharedModule, OrderConfirmRoutingModule, MaterialModule]
})
export class OrderConfirmModule {}