import { NgModule } from '@angular/core';
import { PaymentRoutingModule } from './payment-routing.module';
import { SharedModule } from '../shared';
import { PaymentContainerComponent } from './components';

@NgModule({
    declarations: [PaymentContainerComponent],
    imports: [SharedModule, PaymentRoutingModule]
})
export class AboutModule {}