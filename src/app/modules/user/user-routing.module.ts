import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginContainerComponent, UserRegisterContainerComponent } from './components';
import { UserLayoutComponent } from 'src/app/shared';

const routes: Routes = [
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      { path: 'login', component: UserLoginContainerComponent },
      { path: 'register', component: UserRegisterContainerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
