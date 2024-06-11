import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  email: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  getToken(): string | null {
    return sessionStorage.getItem('auth-token');
  }

  decodeToken(token: string): DecodedToken | null {
    try {
      return jwtDecode<DecodedToken>(token);
    } catch (error) {
      this.router.navigate(['/login']);
      return null;
    }
  }

  hasRole(expectedRoles: string[]): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      if (decodedToken) {
        const userRoles = decodedToken.roles;
        return userRoles.some((role: string) => expectedRoles.includes(role));
      }
    }
    return false;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  handleUnauthorized(): void {
    this.router.navigate(['']);
  }

  handleLoginRedirect(): void {
    this.router.navigate(['/login']);
  }
}
