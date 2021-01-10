import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { add } from '../../../store/user.actions';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartContainerComponent implements OnInit {
  cart$: Observable<any>;
  data: any = {};
  user$: Observable<any>;
  userResource$: Observable<any>;

  constructor(
    private router: Router,
    private service: CartService,
    private store: Store<{ user: any }>,
    private http: HttpClient
  ) {
    this.user$ = store.select('user');
  }

  ngOnInit(): void {
    this.user$.pipe(take(1)).subscribe((value) => {
      if (!value.username) {
        this.userResource$ = this.http
          .post<any>(
            `${environment.baseUrl}/user/get_user_info.do`,
            undefined,
            {
              withCredentials: true,
            }
          )
          .pipe(
            map((resource) => {
              return resource;
            })
          );
          this.userResource$.subscribe((res) => {
            if (res.status === 0) {
              this.store.dispatch(add({ payload: res.data }));
              this.cart$ = this.loadCart().pipe(map((res) => res.data));
              this.cart$.subscribe((res) => this.renderCart(res.data));
            } else {
              this.router.navigate(['/login']);
              return;
            }
          })
      } else {
        this.cart$ = this.loadCart().pipe(map((res) => res.data));
        this.cart$.subscribe((res) => this.renderCart(res.data));
      }
    });
  }

  loadCart = (): Observable<any> => {
    return this.service.getCartList();
  };
  renderCart = (data: any) => {
    // 缓存购物车信息
    this.data.cartInfo = data;
  };

  cartSelect(value: boolean, productId: number) {
    // 选中
    if (value) {
      this.cart$ = this.service
        .selectProduct(productId)
        .pipe(map((res) => res.data));
    } else {
      this.cart$ = this.service
        .unselectProduct(productId)
        .pipe(map((res) => res.data));
    }
  }
  cartSelectAll(value: boolean) {
    if (value) {
      this.cart$ = this.service.selectAllProduct().pipe(map((res) => res.data));
    } else {
      this.cart$ = this.service
        .unselectAllProduct()
        .pipe(map((res) => res.data));
    }
  }
  plus(quantity: number, maxQuantity: number, productId: number) {
    if (quantity + 1 >= maxQuantity) {
      alert('该商品数量已达到上限');
      return;
    }
    this.cart$ = this.service
      .updateProduct(productId, quantity + 1)
      .pipe(map((res) => res.data));
  }
  minus(quantity: number, productId: number) {
    if (quantity - 1 <= 0) {
      return;
    }
    this.cart$ = this.service
      .updateProduct(productId, quantity - 1)
      .pipe(map((res) => res.data));
  }
  cartDelete(productId: number) {
    if (window.confirm('确认要删除该商品？')) {
      this.cart$ = this.service
        .deleteProduct(productId.toString())
        .pipe(map((res) => res.data));
    }
  }
  deleteSelected(cart: any) {
    if (window.confirm('确认要删除该商品？')) {
      let arrProductIds = [];
      for (const productVo of cart.cartProductVoList) {
        if (productVo.productChecked) {
          arrProductIds.push(productVo.productId);
        }
      }
      this.cart$ = this.service
        .deleteProduct(arrProductIds.join(','))
        .pipe(map((res) => res.data));
    }
  }

  checkout() {
    this.router.navigate(['/confirm']);
  }
}
