import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Product,
  ListResource,
  ProductDetail,
  ProductDetailResource,
} from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) {}

  // Get address list
  getAddressList(pageSize: string = '50') {
    return this.http.get<any>(
      `${environment.baseUrl}/shipping/list.do?pageSize=${pageSize}`,
      {
        withCredentials: true,
      }
    );
  }
  save(addressInfo: any) {
    return this.http.get<any>(
      `${environment.baseUrl}/shipping/add.do`,
      {
        withCredentials: true,
        params: addressInfo
      }
    );
  }
  // Update receiver
  update(addressInfo: any) {
    return this.http.get<any>(
      `${environment.baseUrl}/shipping/update.do`,
      {
        withCredentials: true,
        params: addressInfo
      }
    );
  }
  // Delete receiver
  deleteAddress(shippingId: string) {
    return this.http.get<any>(
      `${environment.baseUrl}/shipping/del.do?shippingId=${shippingId}`,
      {
        withCredentials: true,
      }
    );
  }
  // Get receiver info
  getAddress(shippingId: string) {
    return this.http.get<any>(
      `${environment.baseUrl}/shipping/select.do?shippingId=${shippingId}`,
      {
        withCredentials: true,
      }
    );
  }
}
