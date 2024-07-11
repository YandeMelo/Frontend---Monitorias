import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorLayoutComponent } from '../../../components/professor-layout/professor-layout.component';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { StatusPipe } from '../../../pipes/status.pipe';
import { ProfessorService } from '../../../services/professor.service';

export interface AvaliarMonitoria {
  disciplina: string,
  curso: string,
  professorNome: string,
  semestre: string,
  status: string,
  dataCadastro: string,
  ultimaAtualizacao: string,
  nome: string,
  email: string,
  fotoPerfil: string,
  idHistoricoEscolar: number;
}

@Component({
  selector: 'app-avaliar-monitoria',
  standalone: true,
  imports: [ProfessorLayoutComponent, CursoPipe, StatusPipe, DatePipe],
  templateUrl: './avaliar-monitoria.component.html',
  styleUrl: './avaliar-monitoria.component.scss'
})
export class AvaliarMonitoriaComponent {
  monitoria: AvaliarMonitoria | null = null;
  
  constructor(
    private professorService: ProfessorService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    const idMonitoria = history.state.idMonitoria;
    this.professorService.avaliarMonitoria(idMonitoria).subscribe((res: AvaliarMonitoria) => {
      this.monitoria = res;
    });
  }

  baixarHistorico(idHistorico: number) {
    this.professorService.baixarHistorico(idHistorico).subscribe((result: Blob): void => {
      const file = new Blob([result], {type: 'application/pdf'});
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }

  handleConsultarCandidatosRedirect(idMonitoria: number | undefined){
    this.router.navigate(['/professor/monitorias/candidatos'],  {state: {idMonitoria}});
  }
}
