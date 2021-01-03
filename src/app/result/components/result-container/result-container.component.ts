import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { CartService } from 'src/app/cart';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultContainerComponent implements OnInit {

  ngOnInit(): void {

  }
}
