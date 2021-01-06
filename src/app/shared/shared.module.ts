import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';
import { SearchComponent } from './components/search';
import { NavSideComponent } from './components/nav-side';
import { NoticeComponent } from './components/notice';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchComponent, NavSideComponent, NoticeComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent, FooterComponent, SearchComponent, NavSideComponent, NoticeComponent],
})
export class SharedModule {}
