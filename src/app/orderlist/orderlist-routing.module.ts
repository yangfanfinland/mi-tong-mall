import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'order-list',
    component: OrderListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderListRoutingModule {}
