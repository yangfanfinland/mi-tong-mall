import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent, FooterComponent, SearchComponent, NavSideComponent, NoticeComponent, ImageSliderComponent, BreadcrumbComponent, MainLayoutComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchComponent, NavSideComponent, NoticeComponent, ImageSliderComponent, BreadcrumbComponent, MainLayoutComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent, FooterComponent, SearchComponent, NavSideComponent, NoticeComponent, ImageSliderComponent, BreadcrumbComponent, RouterModule, MainLayoutComponent],
})
export class SharedModule {}
