import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared';
import { AboutContainerComponent } from './components';

@NgModule({
    declarations: [AboutContainerComponent],
    imports: [SharedModule, AboutRoutingModule]
})
export class AboutModule {}