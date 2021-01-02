import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { ListService } from 'src/app/list';
import { map, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartContainerComponent implements OnInit {

  cart$: Observable<any>;

  ngOnInit(): void {

  }
}
