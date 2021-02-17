import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductContainerComponent } from './components';
import { MainLayoutComponent } from 'src/app/shared';

const routes: Routes = [
  {
    path: 'product',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ProductContainerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
