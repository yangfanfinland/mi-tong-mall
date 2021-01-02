import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ListResource, ProductDetail, ProductDetailResource } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}
  getProductsByKeyword(keyword: string, pageNum: string = "1", pageSize: string = "10", orderBy: string = "default") {
    return this.http.get<ListResource>(`/api/product/list.do`, {
      params: { keyword: keyword, pageNum: pageNum, pageSize: pageSize, orderBy: orderBy },
    });
  }
  getProductsByCategoryId(categoryId: string, pageNum: string = "1", pageSize: string = "10", orderBy: string = "default") {
    return this.http.get<ListResource>(`/api/product/list.do`, {
      params: { categoryId: categoryId, pageNum: pageNum, pageSize: pageSize, orderBy: orderBy },
    });
  }
  getProductById(id: string) {
    return this.http.get<ProductDetailResource>(`/api/product/detail.do`, {
      params: { productId: id },
    })
  }
}
