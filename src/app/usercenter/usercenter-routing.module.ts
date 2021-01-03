import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCenterContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'user-center',
    component: UserCenterContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCenterRoutingModule {}
