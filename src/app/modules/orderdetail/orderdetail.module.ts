import { NgModule } from '@angular/core';
import { OrderDetailRoutingModule } from './orderdetail-routing.module';
import { SharedModule } from '../../shared';
import { OrderDetailContainerComponent } from './components';
import { MaterialModule } from '../../material';

@NgModule({
    declarations: [OrderDetailContainerComponent],
    imports: [SharedModule, OrderDetailRoutingModule, MaterialModule]
})
export class OrderDetailModule {}