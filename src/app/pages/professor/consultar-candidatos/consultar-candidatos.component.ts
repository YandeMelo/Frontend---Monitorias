import { Component } from '@angular/core';
import { ProfessorLayoutComponent } from '../../../components/professor-layout/professor-layout.component';
import { ProfessorService } from '../../../services/professor.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { DatePipe } from '@angular/common';
import { StatusPipe } from '../../../pipes/status.pipe';
import { Router } from '@angular/router';

export interface PageableResponseProfessor {
  content: Candidato[];
  pageable: any;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: any;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

interface Candidato {
  id: number,
  nome: string,
  email: string,
  curso: string,
  dataSolicitacao: string,
  statusCandidatura: string
}

@Component({
  selector: 'app-consultar-candidatos',
  standalone: true,
  imports: [ProfessorLayoutComponent, NgxPaginationModule, CursoPipe, DatePipe, StatusPipe],
  templateUrl: './consultar-candidatos.component.html',
  styleUrl: './consultar-candidatos.component.scss'
})
export class ConsultarCandidatosComponent {
  candidatos$: Candidato[] = [];
  paginaAtual: number = 1;
  totalElements: number = 0;
  idMonitoria: number = 0;

  constructor(private professorService: ProfessorService,
              private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.idMonitoria = history.state.idMonitoria;
    this.consultarCandidatos(this.idMonitoria, this.paginaAtual);
  }

  pageChange(newPage: number): void {
    this.paginaAtual = newPage;
    this.consultarCandidatos(this.idMonitoria, this.paginaAtual);
  }
  
  consultarCandidatos(idMonitoria: number, page: number) {
    this.professorService.consultarCandidatos(idMonitoria, page-1).subscribe((res: PageableResponseProfessor) => {
      this.candidatos$ = res.content;
      this.totalElements = res.totalElements;
    },(error) => {
      console.error('Erro ao buscar monitorias', error);
    });
  }

  handleAvaliarRedirect(idMonitoria: number, idCandidato: number){
    this.router.navigate(['professor/candidatos/avaliar'], {state: {idMonitoria, idCandidato}});
  }
}
