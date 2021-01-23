import { NgModule } from '@angular/core';
import { UserLoginRoutingModule } from './userlogin-routing.module';
import { SharedModule } from '../../shared';
import { UserLoginContainerComponent } from './components';

@NgModule({
    declarations: [UserLoginContainerComponent],
    imports: [SharedModule, UserLoginRoutingModule]
})
export class UserLoginModule {}