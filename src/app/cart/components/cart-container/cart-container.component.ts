import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { CartService } from 'src/app/cart';
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
  data: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CartService
  ) {}

  ngOnInit(): void {
    this.cart$ = this.loadCart().pipe(map(res => res.data));
    this.cart$.subscribe(res => this.renderCart(res.data));
  }

  loadCart = (): Observable<any> => {
    return this.service.getCartList();
  }
  renderCart = (data: any) => {
    this.filter(data);
    // 缓存购物车信息
    this.data.cartInfo = data;

  }
  filter(data: any) {
    data.notEmpty = !!data.cartProductVoList.length;
  }
}
