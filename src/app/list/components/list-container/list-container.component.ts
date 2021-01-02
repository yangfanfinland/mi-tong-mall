import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared';
import { ListService } from 'src/app/list';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListContainerComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private service: ListService) {}

  ngOnInit(): void {
    this.products$ = this.service
      .getProductsByKeyword(encodeURIComponent('iPhone'))
      .pipe(map((resource) => resource.data ? resource.data.list : []));
  }
}
