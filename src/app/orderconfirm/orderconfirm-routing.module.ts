import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderConfirmContainerComponent } from './components';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'confirm',
    component: OrderConfirmContainerComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class OrderConfirmRoutingModule {}
