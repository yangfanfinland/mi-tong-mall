import { NgModule } from '@angular/core';
import { DetailRoutingModule } from './detail-routing.module';
import { SharedModule } from '../shared';
import { DetailContainerComponent } from './components';

@NgModule({
    declarations: [DetailContainerComponent],
    imports: [SharedModule, DetailRoutingModule]
})
export class DetailModule {}