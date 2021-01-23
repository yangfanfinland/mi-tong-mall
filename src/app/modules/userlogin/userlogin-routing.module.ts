import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'login',
    component: UserLoginContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLoginRoutingModule {}
