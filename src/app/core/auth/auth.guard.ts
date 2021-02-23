import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map(response => {
        if ((response as any).status === 0) {
          return true;
        }
        this.router.navigate(['/user/login'], { queryParams: { returnUrl: window.location.href } });
        return false;
      }),
      catchError(() => {
        this.router.navigate(['/user/login']);
        return of(false);
      })
    );
  }
}
