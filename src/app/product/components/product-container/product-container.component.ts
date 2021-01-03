import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared';
import { ProductService } from 'src/app/product';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductContainerComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    // this.products$ = this.service
    //   .getProductsByKeyword(encodeURIComponent('iPhone'))
    //   .pipe(map((resource) => resource.data ? resource.data.list : []));

    this.products$ = this.route.queryParams.pipe(
      switchMap(params => {
        const keyword = params.keyword || "";
        const categoryId = params.categoryId || "";
        if (keyword) {
          return this.service.getProductsByKeyword(keyword);
        }
        return this.service.getProductsByCategoryId(categoryId);
      }),
      map((resource) => resource.data ? resource.data.list : [])
    );
  }
}
