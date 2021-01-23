import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCenterContainerComponent } from './components';
import { AuthGuard } from 'src/app/core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'user-center',
    component: UserCenterContainerComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class UserCenterRoutingModule {}
