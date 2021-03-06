import {
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetail } from 'src/app/shared';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-orderdetail-container',
  templateUrl: './orderdetail-container.component.html',
  styleUrls: ['./orderdetail-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetailContainerComponent implements OnInit {
  order$: Observable<any>;
  orderNumber: number;
  links = [
    { name: "Center", href: "/center" },
    { name: "Order list", href: "/center/order-list" },
    { name: "Order detail", href: "" }
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: OrderService
  ) {}

  ngOnInit(): void {
    const orderNumber = this.route.snapshot.queryParams.orderNumber;
    this.orderNumber = orderNumber;
    this.order$ = this.service.getOrderDetail(orderNumber).pipe(map((response) => response.data));
  }

  orderCancel(orderNumber: number) {
    if (window.confirm('Confirm to cancel this order?')) {
      this.order$ = this.service.cancelOrder(orderNumber).pipe(
        switchMap(response => {
          return this.service.getOrderDetail(this.orderNumber);
        }),
        map((response) => response.data)
      )
    }
  }
}
