import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { map } from 'rxjs/operators';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-orderlist-container',
  templateUrl: './orderlist-container.component.html',
  styleUrls: ['./orderlist-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderListContainerComponent implements OnInit {

  list$: Observable<any>;

  constructor(
    private service: OrderService,
  ) {}

  ngOnInit(): void {
    this.list$ = this.service.getOrderList().pipe(map(response => response.data.list));
  }
}
