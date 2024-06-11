import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const expectedRoles = next.data['expectedRoles'];

    if (this.authService.isAuthenticated()) {
      if (this.authService.hasRole(expectedRoles)) {
        return true;
      } else {
        this.authService.handleUnauthorized();
        return false;
      }
    } else {
      this.authService.handleLoginRedirect();
      return false;
    }
  }
}
