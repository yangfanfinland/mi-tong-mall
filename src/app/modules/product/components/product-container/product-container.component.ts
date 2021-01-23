import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared';
import { ProductService } from 'src/app/core/services/product.service';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductContainerComponent implements OnInit {
  //products$: Observable<Product[]>;
  listResource$: Observable<any>;
  keyword: string = '';
  categoryId: string = '';
  asc = false;
  type = "default";
  pageNum: number = 1;
  pageSize: number = 10;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    // this.products$ = this.service
    //   .getProductsByKeyword(encodeURIComponent('iPhone'))
    //   .pipe(map((resource) => resource.data ? resource.data.list : []));

    this.listResource$ = this.route.queryParams.pipe(
      switchMap((params) => {
        this.keyword = params.keyword;
        this.categoryId = params.categoryId;
        if (this.keyword) {
          return this.getProductsByKeyword("default", this.pageNum, this.pageSize);
        }
        return this.getProductsByCategoryId("default", this.pageNum, this.pageSize);
      }),
      map((resource) => (resource.data ? resource.data : { status: 0 } ))
    );
  }

  sort(type: string) {
    this.type = type;
    this.loadListResource(type, this.pageNum, this.pageSize);
  }

  getProductsByKeyword = (sort: string, pageNum: number, pageSzie: number): Observable<any> => {
    return this.service
      .getProductsByKeyword(this.keyword, pageNum.toString(), pageSzie.toString(), sort);
  };

  getProductsByCategoryId = (sort: string, pageNum: number, pageSzie: number): Observable<any> => {
    return this.service
      .getProductsByCategoryId(this.categoryId, pageNum.toString(), pageSzie.toString(), sort);
  };

  onPageFired = (pageIndex: number, pageSize: number) => {
    this.pageNum = pageIndex + 1;
    this.pageSize = pageSize;
    this.loadListResource(this.type, this.pageNum, this.pageSize);
  }

  loadListResource = (type: string, pageNum: number, pageSize: number) => {
    if (type === 'default') {
      if (this.keyword) {
        this.listResource$ = this.getProductsByKeyword("default", pageNum, pageSize).pipe(map((resource) => (resource.data ? resource.data : { status: 0 })));
      } else {
        this.listResource$ = this.getProductsByCategoryId("default", pageNum, pageSize).pipe(map((resource) => (resource.data ? resource.data: { status: 0 })));
      }
    }
    if (type === 'price') {
      if (this.keyword) {
        if (this.asc) {
          this.listResource$ = this.getProductsByKeyword('price_desc', pageNum, pageSize).pipe(map((resource) => (resource.data ? resource.data : { status: 0 })));
          this.asc = false;
        } else {
          this.listResource$ = this.getProductsByKeyword('price_asc', pageNum, pageSize).pipe(map((resource) => (resource.data ? resource.data : { status: 0 })));
          this.asc = true;
        }
      } else {
        if (this.asc) {
          this.listResource$ = this.getProductsByCategoryId('price_desc', pageNum, pageSize).pipe(map((resource) => (resource.data ? resource.data : { status: 0 })));
          this.asc = false;
        } else {
          this.listResource$ = this.getProductsByCategoryId('price_asc', pageNum, pageSize).pipe(map((resource) => (resource.data ? resource.data : { status: 0 })));
          this.asc = true;
        }
      }
    }
  }
}
