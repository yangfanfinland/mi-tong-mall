import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCenterUpdateContainerComponent } from './components';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'user-center-update',
    component: UserCenterUpdateContainerComponent,
    canActivate: [ AuthGuard ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class UserCenterUpdateRoutingModule {}
