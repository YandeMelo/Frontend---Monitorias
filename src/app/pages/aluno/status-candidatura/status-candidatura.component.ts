import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from '../../../services/aluno.service';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { StatusPipe } from '../../../pipes/status.pipe';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { AlunoLayoutComponent } from '../../../components/aluno-layout/aluno-layout.component';
import { UploadService } from '../../../services/upload.service';

export interface Candidatura {
  monitoriaId: {
    id: number,
    curso: string;
    disciplina: string;
    professor: string;
    semestre: string;
    statusMonitoria: string,
    ultimaAtualizacao: string;
  },
  idRelatorio: number,
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
  arquivoAdicionado: boolean = false;
  file: File | undefined;

  constructor(private router: Router,
    private alunoService: AlunoService,
    private uploadService: UploadService,
    private toastrService: ToastrService
  ) { }

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
  onFilechange(event: any) {
    this.file = event.target.files[0];
  }

  baixarArquivo(idArquivo: number) {
    this.alunoService.baixarArquivo(idArquivo).subscribe((result: Blob): void => {
      const file = new Blob([result], {type: 'application/pdf'});
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }

  uploadRelatorio() {
    if (this.file) {
      if (this.file.type !== 'application/pdf') {
        this.toastrService.error("Formato do arquivo deve ser PDF!");
      } else {
        this.uploadService.adicionarRelatorio(this.file).subscribe({
          next: (response) => {
            this.toastrService.success("Relatório enviado com sucesso!");
          },
          error: (error) => {
            this.toastrService.error("Erro ao enviar o relatório.");
          }
        });
      this.router.navigate(['/aluno']);
      }
    }
  }
  

}
