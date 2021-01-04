import {
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetail } from 'src/app/shared';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/orderconfirm/services';

@Component({
  selector: 'app-orderdetail-container',
  templateUrl: './orderdetail-container.component.html',
  styleUrls: ['./orderdetail-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetailContainerComponent implements OnInit {
  order$: Observable<any>;
  orderNumber: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: OrderService
  ) {}

  ngOnInit(): void {
    this.order$ = this.route.queryParams.pipe(
      switchMap((params) => {
        const orderNumber = params.orderNumber || 0;
        this.orderNumber = orderNumber;
        return this.service.getOrderDetail(orderNumber);
      }),
      map((response) => response.data)
    );
  }

  orderCancel(orderNumber: number) {
    if (window.confirm('确实要取消该订单？')) {
      this.order$ = this.service.cancelOrder(orderNumber).pipe(
        switchMap(response => {
          return this.service.getOrderDetail(this.orderNumber);
        }),
        map((response) => response.data)
      )
    }
  }
}
