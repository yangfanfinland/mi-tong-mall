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
    { name: 'user-center', desc: 'Personal center', href: '/user-center' },
    { name: 'order-list', desc: 'My order', href: '/order-list' },
    { name: 'pass-update', desc: 'Update password', href: '/pass-update' },
    { name: 'about', desc: 'About MMall', href: '/about' },
  ];
  currentPath: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,) {}

  ngOnInit() {
    this.currentPath = this.router.url
  }
}
