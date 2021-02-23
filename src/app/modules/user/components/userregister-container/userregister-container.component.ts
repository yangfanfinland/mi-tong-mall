import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Product, ProductDetail } from 'src/app/shared';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../helper/must-match.validator';
import { SnackBarService } from 'src/app/core/services/snackbar.service';

@Component({
  selector: 'app-userregistercontainer',
  templateUrl: './userregister-container.component.html',
  styleUrls: ['./userregister-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegisterContainerComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private service: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      question: [''],
      answer: ['']
    }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const userInfo = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      passwordConfirm: this.registerForm.value.confirmPassword,
      phone: this.registerForm.value.phone,
      email: this.registerForm.value.email,
      question: this.registerForm.value.question,
      answer: this.registerForm.value.answer,
    };

    this.service.register(userInfo).subscribe(response => {
      if ((response as any).status === 0) { 
        this.router.navigate(['/user/login']);
      } else {
        this.snackBService.openSnackBar(`Register failed: ${(response as any).msg}`, "End now");
        return
      }
    });
  }
}
