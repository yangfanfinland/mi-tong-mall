import { NgModule } from '@angular/core';
import { OrderListRoutingModule } from './orderlist-routing.module';
import { SharedModule } from '../../shared';
import { OrderListContainerComponent } from './components';
import { MaterialModule } from '../../material';

@NgModule({
    declarations: [OrderListContainerComponent],
    imports: [SharedModule, OrderListRoutingModule, MaterialModule]
})
export class OrderListModule {}