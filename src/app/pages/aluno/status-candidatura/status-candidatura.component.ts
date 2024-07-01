import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from '../../../services/aluno.service';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { StatusPipe } from '../../../pipes/status.pipe';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { AlunoLayoutComponent } from '../../../components/aluno-layout/aluno-layout.component';

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
  imports: [AlunoLayoutComponent, CursoPipe, StatusPipe, DatePipe],
  templateUrl: './status-candidatura.component.html',
  styleUrl: './status-candidatura.component.scss'
})
export class StatusCandidaturaComponent {
  
  monitoria: Candidatura | null = null;

  constructor(private router: Router,
              private alunoService: AlunoService,
              private toastrService: ToastrService
  ){}
  
  ngOnInit(): void {
    this.getCandidatura();
  }
  
  getCandidatura(): void {
    this.alunoService.getCandidatura().subscribe(
      (candidatura: Candidatura) => {
        this.monitoria = candidatura;
      },
      error => {
        this.toastrService.error("Nenhuma candidatura encontrada.")
        this.router.navigate(['/aluno']);
      }
    );
  }

}
