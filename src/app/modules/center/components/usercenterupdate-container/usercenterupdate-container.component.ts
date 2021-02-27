import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usercenterupdatecontainer',
  templateUrl: './usercenterupdate-container.component.html',
  styleUrls: ['./usercenterupdate-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCenterUpdateContainerComponent implements OnInit {
  user$: Observable<any>;
  links = [
    { name: "Center", href: "/center" },
    { name: "Update", href: "" }
  ]

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
