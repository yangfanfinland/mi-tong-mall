import { ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { UserService } from 'src/app/userlogin';
import { map, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ModalComponent } from '../../../material/components';

@Component({
  selector: 'app-orderlist-container',
  templateUrl: './orderlist-container.component.html',
  styleUrls: ['./orderlist-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderListContainerComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

  }
}
