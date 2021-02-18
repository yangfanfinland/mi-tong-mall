import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterContainerComponent } from './components';
import { UserLayoutComponent } from 'src/app/shared';

const routes: Routes = [
  {
    path: 'register',
    component: UserLayoutComponent,
    children: [
      { path: '', component: UserRegisterContainerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRegisterRoutingModule {}
