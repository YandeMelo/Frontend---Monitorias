import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from '../../../services/aluno.service';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { StatusPipe } from '../../../pipes/status.pipe';
import { DatePipe } from '@angular/common';

export interface Candidatura {
    monitoriaId: {
        curso: string;
        disciplina: string;
        professor: string;
        semestre: string;
        ultimaAtualizacao: string;
    },
    dataSolicitacao: string;
    statusCandidatura: string;
  }

@Component({
  selector: 'app-status-candidatura',
  standalone: true,
  imports: [CursoPipe, StatusPipe, DatePipe],
  templateUrl: './status-candidatura.component.html',
  styleUrl: './status-candidatura.component.scss'
})
export class StatusCandidaturaComponent {
  
  monitoria: Candidatura | null = null;

  constructor(private router: Router,
              private alunoService: AlunoService
  ){}
  
  ngOnInit(): void {
    if (sessionStorage.getItem('candidatura')) {
        const candidatura = sessionStorage.getItem('candidatura');
        this.monitoria = JSON.parse(candidatura || "") as Candidatura;
    } else {
        this.getCandidatura();
    }
  }
  
  getCandidatura(): void {
    this.alunoService.getCandidatura().subscribe(
      (candidatura: Candidatura) => {
        this.monitoria = candidatura;
        sessionStorage.setItem('candidatura', JSON.stringify(candidatura));
      },
      error => {
        console.error('Erro ao buscar a candidatura:', error);
      }
    );
  }

  handleAlunoRedirect(): void {
    this.router.navigate(['/aluno']);
  }

  
}
