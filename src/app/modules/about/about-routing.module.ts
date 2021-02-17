import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutContainerComponent } from './components';
import { MainLayoutComponent } from 'src/app/shared';

const routes: Routes = [
  {
    path: 'about',
    component: MainLayoutComponent,
    children: [
      { path: '', component: AboutContainerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
