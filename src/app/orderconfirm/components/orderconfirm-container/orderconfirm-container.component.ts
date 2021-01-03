import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { UserService } from 'src/app/userlogin';
import { map, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-orderconfirm-container',
  templateUrl: './orderconfirm-container.component.html',
  styleUrls: ['./orderconfirm-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderConfirmContainerComponent implements OnInit {

  order$: Observable<any>;
  constructor(

  ) {}

  ngOnInit(): void {

  }

  login() {

  }
}
