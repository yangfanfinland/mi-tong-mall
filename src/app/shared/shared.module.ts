import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header';
import { SearchComponent } from './components/search';

@NgModule({
  declarations: [HeaderComponent, SearchComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, HeaderComponent, SearchComponent],
})
export class SharedModule {}
