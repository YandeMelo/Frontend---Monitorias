import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Monitoria } from '../monitorias-disponiveis/monitorias-disponiveis.component';
import { AlunoService } from '../../../services/aluno.service';
import { DatePipe } from '@angular/common';
import { UploadService } from '../../../services/upload.service';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { StatusPipe } from '../../../pipes/status.pipe';
import { ToastrService } from 'ngx-toastr';
import { AlunoLayoutComponent } from '../../../components/aluno-layout/aluno-layout.component';

@Component({
  selector: 'app-candidatar-monitoria',
  standalone: true,
  imports: [AlunoLayoutComponent, DatePipe, CursoPipe, StatusPipe],
  templateUrl: './candidatar-monitoria.component.html',
  styleUrl: './candidatar-monitoria.component.scss'
})
export class CandidatarMonitoriaComponent {

  constructor(private router: Router,
    private alunoService: AlunoService,
    private uploadService: UploadService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  monitoria: Monitoria | null = null;
  arquivoAdicionado: boolean = false;

  ngOnInit(): void {
    const idMonitoria = history.state.idMonitoria;
    this.alunoService.infoMonitoria(idMonitoria).subscribe((res: Monitoria) => {
      this.monitoria = res;
    });
  }

  file: File | undefined;

  onFilechange(event: any) {
    this.file = event.target.files[0];
  }

  upload(monitoriaId: number | undefined) {
    if (this.file) {
      if (this.file.type !== 'application/pdf') {
        this.toastrService.error("Formato do arquivo deve ser PDF!")
      } else {
        this.uploadService.candidatarAlunoMonitoria(this.file, monitoriaId || 0).subscribe({
          next: () => this.toastrService.success("Inscrição feita com sucesso!"),
          error: () => this.toastrService.error("Você já está inscrito em uma monitoria!")
        });
        this.router.navigate(['/aluno']);
      }
    }
  }

}