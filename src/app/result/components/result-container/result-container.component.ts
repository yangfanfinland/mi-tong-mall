import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultContainerComponent implements OnInit {

  type$: Observable<string>;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.type$ = this.route.queryParams.pipe(
      map(params => params.type)
    );
  }
}
