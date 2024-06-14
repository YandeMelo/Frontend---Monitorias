import { Component } from '@angular/core';
import { AlunoService } from '../../../services/aluno.service';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './monitorias-disponiveis.component.html',
  styleUrl: './monitorias-disponiveis.component.scss'
})
export class MonitoriasDisponiveisComponent {
  monitorias$: Monitoria[] = [];

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunoService.getMonitorias().subscribe((res: PageableResponse)=>{
        this.monitorias$ = res.content;
    },(error) => {
      console.error('Erro ao buscar monitorias', error);
    });
  }
}
