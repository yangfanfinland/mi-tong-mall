import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCenterUpdateContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'user-info-update',
    component: UserCenterUpdateContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCenterUpdateRoutingModule {}
