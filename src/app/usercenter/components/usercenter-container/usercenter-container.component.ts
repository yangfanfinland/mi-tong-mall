import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { UserService } from 'src/app/userlogin';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-usercentercontainer',
  templateUrl: './usercenter-container.component.html',
  styleUrls: ['./usercenter-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCenterContainerComponent implements OnInit {
  user$: Observable<any>;

  constructor(
    private service: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this.service.getUserInfo().pipe(map(response => response.data));
  }
}
