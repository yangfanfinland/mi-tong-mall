import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { ListService } from 'src/app/list';
import { map, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-container',
  templateUrl: './detail-container.component.html',
  styleUrls: ['./detail-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailContainerComponent implements OnInit {
  product$: Observable<ProductDetail | undefined>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ListService
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.queryParams.pipe(
      switchMap(params => {
        const productId = params.productId || "";
        return this.service.getProductById(productId);
      }),
      map(resource => resource.data)
    );
  }
}
