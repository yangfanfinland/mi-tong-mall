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
  // New receiver
  save(addressInfo: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(
      `${environment.baseUrl}/shipping/add.do`,
      addressInfo,
      {
        headers,
        withCredentials: true,
      }
    );
  }
  // Update receiver
  update(addressInfo: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(
      `${environment.baseUrl}/shipping/update.do`,
      addressInfo,
      {
        headers,
        withCredentials: true,
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
