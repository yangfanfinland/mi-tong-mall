import { NgModule } from '@angular/core';
import { UserCenterRoutingModule } from './usercenter-routing.module';
import { SharedModule } from '../../shared';
import { UserCenterContainerComponent } from './components';

@NgModule({
    declarations: [UserCenterContainerComponent],
    imports: [SharedModule, UserCenterRoutingModule]
})
export class UserCenterModule {}