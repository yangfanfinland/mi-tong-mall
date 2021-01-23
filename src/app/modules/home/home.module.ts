import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared';
import { HomeContainerComponent } from './components'


@NgModule({
    declarations: [HomeContainerComponent],
    imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}