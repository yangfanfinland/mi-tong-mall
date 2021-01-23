import { NgModule } from '@angular/core';
import { UserCenterUpdateRoutingModule } from './usercenterupdate-routing.module';
import { SharedModule } from '../../shared';
import { UserCenterUpdateContainerComponent } from './components';

@NgModule({
    declarations: [UserCenterUpdateContainerComponent],
    imports: [SharedModule, UserCenterUpdateRoutingModule]
})
export class UserCenterUpdateModule {}