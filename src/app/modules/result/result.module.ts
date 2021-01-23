import { NgModule } from '@angular/core';
import { ResultRoutingModule } from './result-routing.module';
import { SharedModule } from '../../shared';
import { ResultContainerComponent } from './components';

@NgModule({
    declarations: [ResultContainerComponent],
    imports: [SharedModule, ResultRoutingModule]
})
export class ResultModule {}