import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  isAuthenticated() {
    return this.http.post<any>(
        `${environment.baseUrl}/user/get_user_info.do`,
        undefined,
        {
          withCredentials: true,
        }
      )
  }
}
