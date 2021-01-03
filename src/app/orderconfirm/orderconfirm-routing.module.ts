import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderConfirmContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'confirm',
    component: OrderConfirmContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderConfirmRoutingModule {}
