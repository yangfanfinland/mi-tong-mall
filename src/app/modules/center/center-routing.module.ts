import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCenterContainerComponent, UserCenterUpdateContainerComponent, OrderListContainerComponent, OrderDetailContainerComponent, PassUpdateContainerComponent } from './components';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { MainLayoutComponent } from 'src/app/shared';

const routes: Routes = [
  {
    path: 'center',
    component: MainLayoutComponent,
    children: [
      { path: '', component: UserCenterContainerComponent },
      { path: 'update', component: UserCenterUpdateContainerComponent },
      { path: 'order-list', component: OrderListContainerComponent },
      { path: 'order-detail', component: OrderDetailContainerComponent },
      { path: 'pass-update', component: PassUpdateContainerComponent },
    ],
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class UserCenterRoutingModule {}
