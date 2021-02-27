import { NgModule } from '@angular/core';
import { UserCenterRoutingModule } from './center-routing.module';
import { SharedModule } from '../../shared';
import { UserCenterContainerComponent, UserCenterUpdateContainerComponent, OrderListContainerComponent, OrderDetailContainerComponent, PassUpdateContainerComponent } from './components';
import { MaterialModule } from '../../material';

@NgModule({
    declarations: [UserCenterContainerComponent, UserCenterUpdateContainerComponent, OrderListContainerComponent, OrderDetailContainerComponent, PassUpdateContainerComponent],
    imports: [SharedModule, UserCenterRoutingModule, MaterialModule]
})
export class CenterModule {}