import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { UserService } from 'src/app/core/services/user.service';
import { map, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-passresetcontainer',
  templateUrl: './passreset-container.component.html',
  styleUrls: ['./passreset-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PassResetContainerComponent implements OnInit {
  username = new FormControl('')
  password = new FormControl('')

  constructor(
    private service: UserService
  ) {}

  ngOnInit(): void {

  }
}
