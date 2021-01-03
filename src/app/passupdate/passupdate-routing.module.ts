import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassUpdateContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'pass-update',
    component: PassUpdateContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassUpdateRoutingModule {}
