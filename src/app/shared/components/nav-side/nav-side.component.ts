import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavSideComponent implements OnInit {
  navList = [
    { name: 'user-center', desc: 'Personal center', href: '/center' },
    { name: 'order-list', desc: 'My order', href: '/center/order-list' },
    { name: 'pass-update', desc: 'Update password', href: '/center/pass-update' }
  ];
  currentPath: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,) {}

  ngOnInit() {
    this.currentPath = this.router.url
  }
}
