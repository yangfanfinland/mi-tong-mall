import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListContainerComponent } from './components';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { MainLayoutComponent } from 'src/app/shared';

const routes: Routes = [
  {
    path: 'order-list',
    component: MainLayoutComponent,
    children: [
      { path: '', component: OrderListContainerComponent },
    ],
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class OrderListRoutingModule {}
