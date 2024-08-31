import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-layout',
  standalone: true,
  imports: [],
  templateUrl: './professor-layout.component.html',
  styleUrl: './professor-layout.component.scss'
})
export class ProfessorLayoutComponent {
  constructor(private router: Router) {
    
  }
  handleInicioRedirect(){
    this.router.navigate(['/professor']);
  }
  handleAbrirMonitoriaRedirect(){
    this.router.navigate(['professor/abrir']);
  }
  handleMonitoriasAbertasRedirect(){
    this.router.navigate(['professor/monitorias']);
  }
  handlePerfilRedirect(){
    this.router.navigate(['/professor/perfil']);
  }
}
