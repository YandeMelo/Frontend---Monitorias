import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-layout',
  standalone: true,
  imports: [],
  templateUrl: './aluno-layout.component.html',
  styleUrl: './aluno-layout.component.scss'
})
export class AlunoLayoutComponent {
  
  constructor(private router: Router) {
    
  }
  handleInicioRedirect(){
    this.router.navigate(['/aluno']);
  }
}
