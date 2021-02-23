import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { remove } from '../../../store/user.actions';
import { add } from '../../../store/user.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  user$: Observable<any>;
  car$: Observable<any>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<{ user: any }>
  ) {}

  ngOnInit() {
    this.getUser();
    this.car$ = this.http
      .get<any>(`${environment.baseUrl}/cart/get_cart_product_count.do`, {
        withCredentials: true,
      })
      .pipe(map((resource) => resource.data));
  }

  getUser() {
    this.user$ = this.store.select('user');
    this.user$.pipe(take(1)).subscribe((value) => {
      if (!value.username) {
        this.user$ = this.http
          .post<any>(
            `${environment.baseUrl}/user/get_user_info.do`,
            undefined,
            {
              withCredentials: true,
            }
          )
          .pipe(map((resource) => {
            this.store.dispatch(add({ payload: resource.data }))
            return resource.data
          }));
      }
    });
  }

  login() {
    this.router.navigate(['/user/login']);
  }

  register() {
    this.router.navigate(['/user/register']);
  }

  logout() {
    this.http
      .post<any>(`${environment.baseUrl}/user/logout.do`, undefined, {
        withCredentials: true,
      })
      .subscribe((response) => {
        console.log(response);
        this.store.dispatch(remove())
      });
    window.location.reload();
  }
}
