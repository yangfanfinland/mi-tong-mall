import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartContainerComponent } from './components';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { MainLayoutComponent } from 'src/app/shared';

const routes: Routes = [
  {
    path: 'cart',
    component: MainLayoutComponent,
    children: [
      { path: '', component: CartContainerComponent },
    ],
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class CartRoutingModule {}
