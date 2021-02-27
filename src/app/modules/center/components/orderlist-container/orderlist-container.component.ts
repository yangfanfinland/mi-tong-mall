import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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
  links = [
    { name: "Center", href: "/center" },
    { name: "Order list", href: "" }
  ]

  constructor(
    private service: OrderService,
  ) {}

  ngOnInit(): void {
    this.list$ = this.service.getOrderList().pipe(map(response => response.data.list));
  }
}
