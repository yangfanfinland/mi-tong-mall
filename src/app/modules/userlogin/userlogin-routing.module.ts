import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginContainerComponent } from './components';
import { UserLayoutComponent } from 'src/app/shared';

const routes: Routes = [
  {
    path: 'login',
    component: UserLayoutComponent,
    children: [
      { path: '', component: UserLoginContainerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLoginRoutingModule {}
