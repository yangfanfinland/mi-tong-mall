import { NgModule } from '@angular/core';
import { UserRegisterRoutingModule } from './userregister-routing.module';
import { SharedModule } from '../../shared';
import { UserRegisterContainerComponent } from './components';

@NgModule({
    declarations: [UserRegisterContainerComponent],
    imports: [SharedModule, UserRegisterRoutingModule]
})
export class UserRegisterModule {}