import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  // User login
  login(user: User) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<User>(`${environment.baseUrl}/user/login.do?username=${user.username}&password=${user.password}`, JSON.stringify(user), {
      headers,
      withCredentials: true
    });
  }
  // Check username
  checkUsername(str: string, type: string = "username") {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<User>(`${environment.baseUrl}/user/check_valid.do?type=${type}&str=${str}`, str, {
      headers,
      withCredentials: true
    });
  }
  // Register user
  register(userInfo: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<User>(`${environment.baseUrl}/user/register.do`, userInfo, {
      headers,
      withCredentials: true
    });
  }
  // check login status
  checkLogin() {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<User>(`${environment.baseUrl}/user/get_user_info.do`, undefined, {
      headers,
      withCredentials: true
    });
  }
  // Get user password question
  getQuestion(username: string) {
    return this.http.get<any>(`${environment.baseUrl}/user/user/forget_get_question.do?username=${username}`, {
      withCredentials: true
    });
  }
  // Check password reminder question answer
  checkAnswer(userInfo: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(`${environment.baseUrl}/user/user/forget_check_answer.do`, userInfo, {
      headers,
      withCredentials: true
    });
  }
  // Reset password
  resetPassword(userInfo: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(`${environment.baseUrl}/user/user/forget_reset_password.do`, userInfo, {
      headers,
      withCredentials: true
    });
  }
  // Get user info
  getUserInfo() {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(`${environment.baseUrl}/user/user/get_user_info.do`, undefined, {
      headers,
      withCredentials: true
    });
  }
  // Update user info
  updateUserInfo(userInfo: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(`${environment.baseUrl}/user/user/update_information.do`, userInfo, {
      headers,
      withCredentials: true
    });
  }
  // Logout
  logout() {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(`${environment.baseUrl}/user/user/logout.do`, undefined, {
      headers,
      withCredentials: true
    });
  }
}
