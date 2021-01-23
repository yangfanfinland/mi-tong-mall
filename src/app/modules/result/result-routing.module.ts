import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'result',
    component: ResultContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultRoutingModule {}
