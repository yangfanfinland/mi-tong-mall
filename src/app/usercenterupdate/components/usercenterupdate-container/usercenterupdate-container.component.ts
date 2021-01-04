import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { UserService } from 'src/app/userlogin';
import { map, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-usercenterupdatecontainer',
  templateUrl: './usercenterupdate-container.component.html',
  styleUrls: ['./usercenterupdate-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCenterUpdateContainerComponent implements OnInit {
  user$: Observable<any>;

  constructor(
    private router: Router,
    private service: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this.service.getUserInfo().pipe(map(response => response.data))
  }

  onSubmit(form: any) {
    this.service.updateUserInfo(form.value).subscribe(response => console.log(response));
    this.router.navigate(['/user-center']);
  }
}
