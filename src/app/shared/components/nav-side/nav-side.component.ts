import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavSideComponent implements OnInit {
  navList = [
    { name: 'user-center', desc: '个人中心', href: './user-center' },
    { name: 'order-list', desc: '我的订单', href: './order-list' },
    { name: 'user-pass-update', desc: '修改密码', href: './user-pass-update' },
    { name: 'about', desc: '关于MMall', href: './about' },
  ];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}
}
