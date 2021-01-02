import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { UserService } from 'src/app/userlogin';
import { map, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-userlogin-container',
  templateUrl: './userlogin-container.component.html',
  styleUrls: ['./userlogin-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginContainerComponent implements OnInit {
  username = new FormControl('')
  password = new FormControl('')

  constructor(
    private service: UserService
  ) {}

  ngOnInit(): void {

  }

  Login() {
    console.log(this.username, this.password)
    this.service.login({ username: this.username.value, password: this.password.value }).subscribe(user => {
      console.log(user)
      window.location.href = './home';
    })
  }
}
