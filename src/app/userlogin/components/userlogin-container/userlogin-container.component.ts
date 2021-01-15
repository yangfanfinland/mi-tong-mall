import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { UserService } from 'src/app/userlogin';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { add } from '../../../store/user.actions';

@Component({
  selector: 'app-userlogin-container',
  templateUrl: './userlogin-container.component.html',
  styleUrls: ['./userlogin-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginContainerComponent implements OnInit {
  user$: Observable<any>;
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private service: UserService,
    private store: Store<{ user: any }>,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.user$ = store.select('user');
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.user$.pipe(take(1)).subscribe(value => {
      if (!value.username) {
        this.service.login({ username: this.loginForm.value.username, password: this.loginForm.value.password }).subscribe(user => {
          this.store.dispatch(add({ payload: (user as any).data }))
          this.router.navigate(['/home']);
        })
      } else {
        this.router.navigate(['/home']);
      }
    })
  }
}
