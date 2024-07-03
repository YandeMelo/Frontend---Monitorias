import { Component } from '@angular/core';
import { ProfessorLayoutComponent } from '../../../components/professor-layout/professor-layout.component';
import { ProfessorService } from '../../../services/professor.service';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { DatePipe } from '@angular/common';
import { StatusPipe } from '../../../pipes/status.pipe';

export interface Candidato {
  id: number,
  nome: string,
  email: string,
  curso: string,
  fotoPerfil: string,
  idHistoricoEscolar: number,
  dataSolicitacao: string,
  statusCandidatura: string
}

@Component({
  selector: 'app-avaliar-candidato',
  standalone: true,
  imports: [ProfessorLayoutComponent, CursoPipe, DatePipe, StatusPipe],
  templateUrl: './avaliar-candidato.component.html',
  styleUrl: './avaliar-candidato.component.scss'
})
export class AvaliarCandidatoComponent {

candidato: Candidato | null = null;

constructor(private professorService: ProfessorService) {}

ngOnInit(): void {
  const idMonitoria = history.state.idMonitoria;  
  const idCandidato = history.state.idCandidato;
  this.professorService.avaliarCandidato(idMonitoria, idCandidato).subscribe((result: Candidato)=>{
    this.candidato = result;
  })
}

}
