import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'about',
    component: AboutContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
