import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorLayoutComponent } from '../../../components/professor-layout/professor-layout.component';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { StatusPipe } from '../../../pipes/status.pipe';
import { ProfessorService } from '../../../services/professor.service';
import { ToastrService } from 'ngx-toastr';
import { UploadService } from '../../../services/upload.service';

export interface AvaliarMonitoria {
  monitoriaId: number,
  disciplina: string,
  curso: string,
  professorNome: string,
  semestre: string,
  status: string,
  dataCadastro: string,
  ultimaAtualizacao: string,
  alunoId: number,
  nome: string,
  email: string,
  fotoPerfil: string,
  idRelatorioMonitoria: number,
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
  arquivoAdicionado: boolean = false;
  file: File | undefined;
  
  constructor(
    private professorService: ProfessorService,
    private router: Router,
    private toastrService: ToastrService,
    private uploadService: UploadService
  ) {
    
  }

  ngOnInit(): void {
    const idMonitoria = history.state.idMonitoria;
    console.log(idMonitoria);
    this.professorService.avaliarMonitoria(idMonitoria).subscribe((res: AvaliarMonitoria) => {
      this.monitoria = res;
    });
  }

  baixarHistorico(idHistorico: number) {
  this.professorService.baixarArquivo(idHistorico).subscribe(
    (result: Blob) => {
      const file = new Blob([result], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    },
    () => {
      this.toastrService.error("Arquivo não encontrado.");
    }
  );
}

  onFilechange(event: any) {
    this.file = event.target.files[0];
  }

  upload(idAluno: number, idArquivo: number, idMonitoria: number) {
    console.log(idAluno)
    console.log(idArquivo)
    console.log(idMonitoria)
    if (this.file) {
      if (this.file.type !== 'application/pdf') {
        this.toastrService.error("Formato do arquivo deve ser PDF!")
      } else {
        this.uploadService.alterarRelatorio(this.file, idAluno, idArquivo, idMonitoria).subscribe({
          next: () => this.toastrService.success("Monitoria Concluída!"),
          error: () => this.toastrService.error("Erro ao concluir Monitoria!")
        });
        this.router.navigate(['/professor']);
      }
    }
  }

  handleConsultarCandidatosRedirect(idMonitoria: number | undefined){
    this.router.navigate(['/professor/monitorias/candidatos'],  {state: {idMonitoria}});
  }
}
