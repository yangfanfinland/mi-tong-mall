import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassUpdateContainerComponent } from './components';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'pass-update',
    component: PassUpdateContainerComponent,
    canActivate: [ AuthGuard ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class PassUpdateRoutingModule {}
