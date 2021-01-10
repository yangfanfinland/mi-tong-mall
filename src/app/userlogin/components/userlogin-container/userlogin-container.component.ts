import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { UserService } from 'src/app/userlogin';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { add } from '../../../store/user.actions';

@Component({
  selector: 'app-userlogin-container',
  templateUrl: './userlogin-container.component.html',
  styleUrls: ['./userlogin-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginContainerComponent implements OnInit {
  username = new FormControl('')
  password = new FormControl('')
  user$: Observable<any>

  constructor(
    private service: UserService,
    private store: Store<{ user: any }>,
    private router: Router,
  ) {
    this.user$ = store.select('user')
  }

  ngOnInit(): void {

  }

  login() {
    this.user$.pipe(take(1)).subscribe(value => {
      if (!value.username) {
        this.service.login({ username: this.username.value, password: this.password.value }).subscribe(user => {
          this.store.dispatch(add({ payload: (user as any).data }))
          this.router.navigate(['/home']);
        })
      } else {
        this.router.navigate(['/home']);
      }
    })
  }
}
