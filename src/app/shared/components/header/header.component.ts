import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/userlogin';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor(private http: HttpClient) {}

  user$: Observable<any>

  ngOnInit() {
    this.user$ = this.http.post<any>(`http://localhost:8080/mitongmallbackend_war/user/get_user_info.do`, undefined, { withCredentials: true }).pipe(map(resource => resource.data));
  }
}
