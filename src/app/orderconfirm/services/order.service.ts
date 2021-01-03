import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ListResource, ProductDetail, ProductDetailResource } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}
  // Get product list
  getProductList() {
    return this.http.get<any>(`${environment.baseUrl}/order/order/get_order_cart_product.do`, {
      withCredentials: true
    });
  }
  // Create order
  createOrder(orderInfo: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(
      `${environment.baseUrl}/order/order/create.do`,
      orderInfo,
      {
        headers,
        withCredentials: true,
      }
    );
  }
  // Get order list
  getOrderList(pageNum: string = "1", pageSize: string = "10") {
    return this.http.get<any>(`${environment.baseUrl}/order/order/list.do?pageNum=${pageNum}&pageSize=${pageSize}`, {
      withCredentials: true
    });
  }
  // Get order detail
  getOrderDetail(orderNumber: number) {
    return this.http.get<any>(`${environment.baseUrl}/order/order/detail.do?orderNumber=${orderNumber}`, {
      withCredentials: true
    });
  }
  // Cancel order
  cancelOrder(orderNumber: number) {
    return this.http.get<any>(`${environment.baseUrl}/order/order/cancel.do?orderNumber=${orderNumber}`, {
      withCredentials: true
    });
  }
}