import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { UserService } from 'src/app/userlogin';
import { map, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-userregistercontainer',
  templateUrl: './userregister-container.component.html',
  styleUrls: ['./userregister-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegisterContainerComponent implements OnInit {
  username = new FormControl('');
  password = new FormControl('');
  confirmPassword = new FormControl('');
  phone = new FormControl('');
  email = new FormControl('');
  question = new FormControl('');
  answer = new FormControl('');

  constructor(private service: UserService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    const userInfo = {
      username: this.username.value,
      password: this.password.value,
      passwordConfirm: this.confirmPassword.value,
      phone: this.phone.value,
      email: this.email.value,
      question: this.question.value,
      answer: this.answer.value,
    };

    this.service.register(userInfo).subscribe((user) => {
      this.router.navigate(['/login']);
    });
  }
}
