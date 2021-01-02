import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared';

@NgModule({
    declarations: [],
    imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}