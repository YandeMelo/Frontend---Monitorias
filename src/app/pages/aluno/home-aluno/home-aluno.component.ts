import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-aluno',
  standalone: true,
  imports: [],
  templateUrl: './home-aluno.component.html',
  styleUrl: './home-aluno.component.scss'
})
export class HomeAlunoComponent {

  constructor(private router: Router) {}

  handleDisponiveisRedirect(): void {
    this.router.navigate(['/aluno/monitorias']);
  }

  handleCandidaturaRedirect() {
    this.router.navigate(['/aluno/candidatura']);
  }

}
