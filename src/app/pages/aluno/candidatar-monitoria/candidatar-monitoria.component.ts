import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Monitoria } from '../monitorias-disponiveis/monitorias-disponiveis.component';
import { AlunoService } from '../../../services/aluno.service';
import { DatePipe } from '@angular/common';
import { UploadService } from '../../../services/upload.service';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { StatusPipe } from '../../../pipes/status.pipe';

@Component({
  selector: 'app-candidatar-monitoria',
  standalone: true,
  imports: [DatePipe, CursoPipe, StatusPipe],
  templateUrl: './candidatar-monitoria.component.html',
  styleUrl: './candidatar-monitoria.component.scss'
})
export class CandidatarMonitoriaComponent {

  constructor(private router: Router, private alunoService: AlunoService, private uploadService: UploadService){}

  monitoria: Monitoria | null = null;

  ngOnInit(): void {
    this.alunoService.infoMonitoria();
    this.alunoService.monitoriaAtual.subscribe(info => this.monitoria = info)
  }

  ngOnDestroy() {
    sessionStorage.removeItem('monitoria');
  }

  handleAlunoRedirect(): void {
    this.router.navigate(['/aluno']);
  }

  file: File | undefined;

  onFilechange(event: any) {
    console.log(event.target.files[0]);
    this.file = event.target.files[0];
  }

  upload(monitoriaId: number | undefined) {
    if (this.file) {
      this.uploadService.candidatarAlunoMonitoria(this.file, monitoriaId || 0).subscribe();
    }
    this.handleAlunoRedirect();
  }
  
}