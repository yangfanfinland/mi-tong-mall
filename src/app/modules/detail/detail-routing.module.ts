import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailContainerComponent } from './components';
import { MainLayoutComponent } from 'src/app/shared';

const routes: Routes = [
  {
    path: 'detail',
    component: MainLayoutComponent,
    children: [
      { path: '', component: DetailContainerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRoutingModule {}
