import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';
import { SearchComponent } from './components/search';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, HeaderComponent, FooterComponent, SearchComponent],
})
export class SharedModule {}
