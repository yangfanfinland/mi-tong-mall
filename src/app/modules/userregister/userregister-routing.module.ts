import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'register',
    component: UserRegisterContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRegisterRoutingModule {}
