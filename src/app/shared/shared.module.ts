import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent, FooterComponent, SearchComponent, NavSideComponent, NoticeComponent, ImageSliderComponent } from './components';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchComponent, NavSideComponent, NoticeComponent, ImageSliderComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent, FooterComponent, SearchComponent, NavSideComponent, NoticeComponent, ImageSliderComponent],
})
export class SharedModule {}
