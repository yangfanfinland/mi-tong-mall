import { NgModule } from '@angular/core';
import { PassResetRoutingModule } from './passreset-routing.module';
import { SharedModule } from '../../shared';
import { PassResetContainerComponent } from './components';

@NgModule({
    declarations: [PassResetContainerComponent],
    imports: [SharedModule, PassResetRoutingModule]
})
export class PassResetModule {}