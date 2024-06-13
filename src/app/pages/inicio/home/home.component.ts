import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    
    constructor(private router: Router) { }

    handleLoginRedirect(): void {
        this.router.navigate(['/login']);
    }
    handleRegisterRedirect(): void {
        this.router.navigate(['/register']);
    }
}
