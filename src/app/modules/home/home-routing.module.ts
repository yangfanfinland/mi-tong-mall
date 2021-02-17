import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './components';
import { MainLayoutComponent } from 'src/app/shared';

const routes: Routes = [
  {
    path: 'home',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeContainerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
