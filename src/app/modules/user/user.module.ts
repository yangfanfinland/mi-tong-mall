import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared';
import { UserLoginContainerComponent, UserRegisterContainerComponent } from './components';

@NgModule({
    declarations: [UserLoginContainerComponent, UserRegisterContainerComponent],
    imports: [SharedModule, UserRoutingModule]
})
export class UserModule {}