import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassResetContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'pass-reset',
    component: PassResetContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassResetRoutingModule {}
