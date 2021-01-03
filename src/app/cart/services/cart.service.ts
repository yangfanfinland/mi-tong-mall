import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  // Get shoppingcart amount
  getCartCount() {
    return this.http.get<any>(`${environment.baseUrl}/cart/get_cart_product_count.do`, {withCredentials: true});
  }
  // Add to shoppingcart
  addToCart(productId: number, count: number) {
    return this.http.get<any>(`${environment.baseUrl}/cart/add.do?count=${count}&productId=${productId}`, {withCredentials: true});
  }
  // Get shoppingcart list
  getCartList() {
    return this.http.get<any>(`${environment.baseUrl}/cart/list.do`, {withCredentials: true});
  }
  // Select product in shoppingcart
  selectProduct(productId: number) {
    return this.http.get<any>(`${environment.baseUrl}/cart/select.do?productId=${productId}`, {withCredentials: true});
  }
  // Unselect product in shoppingcart
  unselectProduct(productId: number) {
    return this.http.get<any>(`${environment.baseUrl}/cart/un_select.do?productId=${productId}`, {withCredentials: true});
  }
  // Select all products in shoppingcart
  selectAllProduct() {
    return this.http.get<any>(`${environment.baseUrl}/cart/select_all.do`, {withCredentials: true});
  }
  // Unselect all products in shoppingcart
  unselectAllProduct() {
    return this.http.get<any>(`${environment.baseUrl}/cart/un_select_all.do`, {withCredentials: true});
  }
  // Update product amount in shoppingcart
  updateProduct(productId: number, count: number) {
    return this.http.get<any>(`${environment.baseUrl}/cart/update.do?count=${count}&productId=${productId}`, {withCredentials: true});
  }
  // Delete products in shoppingcart
  deleteProduct(productIds: string ) {
    return this.http.get<any>(`${environment.baseUrl}/cart/delete_product.do?productIds=${productIds}`, {withCredentials: true})
  }
}
