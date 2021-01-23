import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailContainerComponent } from './components';
import { AuthGuard } from 'src/app/core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'order-detail',
    component: OrderDetailContainerComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class OrderDetailRoutingModule {}
