import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  login(user: User) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<User>(`${environment.baseUrl}/user/login.do?username=${user.username}&password=${user.password}`, JSON.stringify(user), {
      headers,
      withCredentials: true
    });
  }
  checkLogin() {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<User>(`${environment.baseUrl}/user/get_user_info.do`, undefined, {
      headers,
      withCredentials: true
    });
  }
}
