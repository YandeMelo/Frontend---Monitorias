import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfessorLayoutComponent } from '../../../components/professor-layout/professor-layout.component';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { StatusPipe } from '../../../pipes/status.pipe';
import { ProfessorService } from '../../../services/professor.service';

export interface PageableResponseMonitoria {
  content: MonitoriaAberta[];
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

interface MonitoriaAberta {
  id: number,
  professorNome: string,
  monitorNome: string,
  disciplina: string,
  curso: string,
  semestre: string,
  status: string,
  dataCadastro: string,
  ultimaAtualizacao: string
}

@Component({
  selector: 'app-monitorias-abertas',
  standalone: true,
  imports: [ProfessorLayoutComponent, NgxPaginationModule, CursoPipe, StatusPipe, DatePipe],
  templateUrl: './monitorias-abertas.component.html',
  styleUrl: './monitorias-abertas.component.scss'
})
export class MonitoriasAbertasComponent {

  monitorias$: MonitoriaAberta[] = [];
  paginaAtual: number = 1;
  totalElements: number = 0;

  constructor(private router: Router, private professorService: ProfessorService) {
    
  }

  ngOnInit(): void {
    this.getMonitorias(this.paginaAtual);
  }

  getMonitorias(page: number){
    this.professorService.monitoriasAbertas(page-1).subscribe((res: PageableResponseMonitoria)=>{
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

  handleConsultarMonitoriaRedirect(idMonitoria: number){
    this.router.navigate(['/professor/monitorias/consultar'],  {state: {idMonitoria}});
  }
}
