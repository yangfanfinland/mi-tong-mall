import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../../shared';
import { ProductContainerComponent, DetailContainerComponent } from './components';
import { MaterialModule } from '../../material';

@NgModule({
    declarations: [ProductContainerComponent, DetailContainerComponent],
    imports: [SharedModule, ProductRoutingModule, MaterialModule]
})
export class ProductModule {}