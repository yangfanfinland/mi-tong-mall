import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResource, Product } from 'src/app/shared';
import { ProductService } from 'src/app/product';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductContainerComponent implements OnInit {
  products$: Observable<Product[]>;
  keyword: string = '';
  categoryId: string = '';
  asc = false;
  type = "default";

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
      switchMap((params) => {
        this.keyword = params.keyword;
        this.categoryId = params.categoryId;
        if (this.keyword) {
          return this.getProductsByKeyword();
        }
        return this.getProductsByCategoryId();
      }),
      map((resource) => (resource.data ? resource.data.list : []))
    );
  }

  sort(type: string) {
    this.type = type;
    if (type === 'default') {
      if (this.keyword) {
        this.products$ = this.getProductsByKeyword().pipe(map((resource) => (resource.data ? resource.data.list : [])));
      } else {
        this.products$ = this.getProductsByCategoryId().pipe(map((resource) => (resource.data ? resource.data.list : [])));
      }
    }
    if (type === 'price') {
      if (this.keyword) {
        if (this.asc) {
          this.products$ = this.getProductsByKeyword('price_desc').pipe(map((resource) => (resource.data ? resource.data.list : [])));
          this.asc = false;
        } else {
          this.products$ = this.getProductsByKeyword('price_asc').pipe(map((resource) => (resource.data ? resource.data.list : [])));
          this.asc = true;
        }
      } else {
        if (this.asc) {
          this.products$ = this.getProductsByCategoryId('price_desc').pipe(map((resource) => (resource.data ? resource.data.list : [])));
          this.asc = false;
        } else {
          this.products$ = this.getProductsByCategoryId('price_asc').pipe(map((resource) => (resource.data ? resource.data.list : [])));
          this.asc = true;
        }
      }
    }
  }

  getProductsByKeyword = (sort: string = "default"): Observable<ListResource> => {
    return this.service
      .getProductsByKeyword(this.keyword, '1', '10', sort);
  };

  getProductsByCategoryId = (sort: string = "default"): Observable<ListResource> => {
    return this.service
      .getProductsByCategoryId(this.categoryId, '1', '10', sort);
  };
}
