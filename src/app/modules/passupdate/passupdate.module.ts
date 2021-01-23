import { NgModule } from '@angular/core';
import { PassUpdateRoutingModule } from './passupdate-routing.module';
import { SharedModule } from '../../shared';
import { PassUpdateContainerComponent } from './components';

@NgModule({
    declarations: [PassUpdateContainerComponent],
    imports: [SharedModule, PassUpdateRoutingModule]
})
export class PassUpdateModule {}