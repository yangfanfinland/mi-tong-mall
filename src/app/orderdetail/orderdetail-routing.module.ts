import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'order-detail',
    component: OrderDetailContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetailRoutingModule {}
