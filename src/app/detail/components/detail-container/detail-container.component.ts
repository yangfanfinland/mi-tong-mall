import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { ProductService } from 'src/app/product';
import { map, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart';

@Component({
  selector: 'app-detail-container',
  templateUrl: './detail-container.component.html',
  styleUrls: ['./detail-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailContainerComponent implements OnInit {
  product$: Observable<ProductDetail | undefined>;
  count = 1;
  productId = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.queryParams.pipe(
      switchMap(params => {
        const productId = params.productId || "";
        this.productId = productId? parseInt(productId): 0;
        return this.service.getProductById(productId);
      }),
      map(resource => resource.data)
    );
  }

  addToCart() {
    this.cartService.addToCart(this.productId, this.count).subscribe(res => {
      this.router.navigate(['/result'], { queryParams: { type: "cart-add"}});
    })
  }

  plus() {
    this.count++;
  }
  minus() {
    if (this.count === 1) return;
    this.count--;
  }
}
