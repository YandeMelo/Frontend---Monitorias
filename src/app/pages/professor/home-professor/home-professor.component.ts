import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-professor',
  standalone: true,
  imports: [],
  templateUrl: './home-professor.component.html',
  styleUrl: './home-professor.component.scss'
})
export class HomeProfessorComponent {

  constructor(private router: Router) {
    
  }

  handleAbrirMonitoriaRedirect(): void {
    this.router.navigate(['professor/abrir-monitoria']);
  }

}
