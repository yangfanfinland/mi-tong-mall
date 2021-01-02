import { NgModule } from '@angular/core';
import { ListRoutingModule } from './list-routing.module';
import { SharedModule } from '../shared';
import { ListContainerComponent } from './components';

@NgModule({
    declarations: [ListContainerComponent],
    imports: [SharedModule, ListRoutingModule]
})
export class ListModule {}