import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  user$: Observable<any>;
  car$: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.user$ = this.http.post<any>(`${environment.baseUrl}/user/get_user_info.do`, undefined, { withCredentials: true }).pipe(map(resource => resource.data));
    this.car$ = this.http.get<any>(`${environment.baseUrl}/cart/get_cart_product_count.do`, { withCredentials: true }).pipe(map(resource => resource.data));
  }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  logout() {
    this.http.post<any>(`${environment.baseUrl}/user/logout.do`, undefined, { withCredentials: true }).subscribe(response => {
      console.log(response)
    })
    window.location.reload();
  }
}
