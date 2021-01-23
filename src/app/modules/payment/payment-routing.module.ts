import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentContainerComponent } from './components';
import { AuthGuard } from 'src/app/core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'payment',
    component: PaymentContainerComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class PaymentRoutingModule {}
