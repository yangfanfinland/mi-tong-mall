import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { UserService } from 'src/app/userlogin';
import { map, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-passupdatecontainer',
  templateUrl: './passupdate-container.component.html',
  styleUrls: ['./passupdate-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PassUpdateContainerComponent implements OnInit {
  username = new FormControl('')
  password = new FormControl('')

  constructor(
    private service: UserService
  ) {}

  ngOnInit(): void {

  }
}
