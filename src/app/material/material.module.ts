import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent, PaginatorComponent } from './components';

@NgModule({
  declarations: [ModalComponent, PaginatorComponent],
  imports: [MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatPaginatorModule, FormsModule, BrowserAnimationsModule],
  exports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    ModalComponent,
    PaginatorComponent
  ],
})
export class MaterialModule {}
