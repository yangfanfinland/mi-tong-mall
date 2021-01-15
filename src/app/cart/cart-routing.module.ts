import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartContainerComponent } from './components';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'cart',
    component: CartContainerComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class CartRoutingModule {}
