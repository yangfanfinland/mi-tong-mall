import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-paymentcontainer',
  templateUrl: './payment-container.component.html',
  styleUrls: ['./payment-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentContainerComponent implements OnInit {
  username = new FormControl('')
  password = new FormControl('')
  links = [
    { name: "Payment", href: "" }
  ]

  constructor(
    private service: UserService
  ) {}

  ngOnInit(): void {

  }
}
