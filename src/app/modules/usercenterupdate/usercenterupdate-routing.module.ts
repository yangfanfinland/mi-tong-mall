import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCenterUpdateContainerComponent } from './components';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { MainLayoutComponent } from 'src/app/shared';

const routes: Routes = [
  {
    path: 'user-center-update',
    component: MainLayoutComponent,
    children: [
      { path: '', component: UserCenterUpdateContainerComponent },
    ],
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class UserCenterUpdateRoutingModule {}
