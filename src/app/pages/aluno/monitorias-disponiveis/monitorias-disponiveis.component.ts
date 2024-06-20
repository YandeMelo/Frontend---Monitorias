import { Component } from '@angular/core';
import { AlunoService } from '../../../services/aluno.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { StatusPipe } from '../../../pipes/status.pipe';

export interface PageableResponse {
  content: Monitoria[];
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

export interface Monitoria {
  id: number;
  professorNome: string;
  disciplina: string;
  curso: string;
  semestre: string;
  status: string;
  dataCadastro: string;
  ultimaAtualizacao: string;
}

@Component({
  selector: 'app-monitorias-disponiveis',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, CursoPipe, StatusPipe],
  templateUrl: './monitorias-disponiveis.component.html',
  styleUrl: './monitorias-disponiveis.component.scss'
})
export class MonitoriasDisponiveisComponent {
  monitorias$: Monitoria[] = [];
  paginaAtual: number = 1;
  totalElements: number = 0;

  constructor(private router: Router, private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.getMonitorias(this.paginaAtual);
  }

  getMonitorias(page: number){
    this.alunoService.getMonitorias(page-1).subscribe((res: PageableResponse)=>{
      this.monitorias$ = res.content;
      this.totalElements = res.totalElements;
    },(error) => {
      console.error('Erro ao buscar monitorias', error);
    });
  }

  pageChange(newPage: number): void {
    this.paginaAtual = newPage;
    this.getMonitorias(this.paginaAtual);
  }

  handleAlunoRedirect(): void {
    this.router.navigate(['/aluno']);
  }

  handleCandidatarRedirect(monitoria: Monitoria) {
    this.alunoService.setInfoMonitoria(monitoria);
    this.router.navigate(['/aluno/monitorias/candidatar']);
  }
}
