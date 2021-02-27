import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-usercentercontainer',
  templateUrl: './usercenter-container.component.html',
  styleUrls: ['./usercenter-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCenterContainerComponent implements OnInit {
  user$: Observable<any>;
  links = [
    { name: "Center", href: "/center" }
  ]

  constructor(
    private service: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this.service.getUserInfo().pipe(map(response => response.data));
  }
}
