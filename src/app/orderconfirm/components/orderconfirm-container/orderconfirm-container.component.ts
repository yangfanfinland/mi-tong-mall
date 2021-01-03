import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDetail } from 'src/app/shared';
import { UserService } from 'src/app/userlogin';
import { map, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AddressService, OrderService } from '../../services';

@Component({
  selector: 'app-orderconfirm-container',
  templateUrl: './orderconfirm-container.component.html',
  styleUrls: ['./orderconfirm-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderConfirmContainerComponent implements OnInit {
  order$: Observable<any>;
  addressList$: Observable<any>;
  orderItem$: Observable<any>;
  data = { selectedAddressId: null };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: OrderService,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {
    this.loadAddressList();
    this.loadProductList();
  }

  loadAddressList() {
    this.addressList$ = this.addressService.getAddressList().pipe(map(this.addressFilter));
  }

  addressFilter = (data: any) => {
    if (this.data.selectedAddressId) {
      var selectedAddressIdFlag = false;
      for (var i = 0, length = data.data.list.length; i < length; i++) {
        if (data.data.list[i].id === this.data.selectedAddressId) {
          data.data.list[i].isActive = true;
          selectedAddressIdFlag = true;
        }
      }
      // 如果以前选中的地址不在列表里，将其删除
      if (!selectedAddressIdFlag) {
        this.data.selectedAddressId = null;
      }
    }
    return data.data.list;
  };

  loadProductList = () => {
    this.orderItem$ = this.service.getProductList().pipe(map(res => res.data));
  }
}
