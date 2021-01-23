import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'detail',
    component: DetailContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRoutingModule {}
