import { Component } from '@angular/core';
import { ProfessorLayoutComponent } from '../../../components/professor-layout/professor-layout.component';
import { ProfessorService } from '../../../services/professor.service';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { DatePipe } from '@angular/common';
import { StatusPipe } from '../../../pipes/status.pipe';
import { ToastrService } from 'ngx-toastr';

export interface Candidato {
  id: number,
  nome: string,
  email: string,
  curso: string,
  fotoPerfil: string,
  idHistoricoEscolar: number,
  dataSolicitacao: string,
  statusCandidatura: string
}

@Component({
  selector: 'app-avaliar-candidato',
  standalone: true,
  imports: [ProfessorLayoutComponent, CursoPipe, DatePipe, StatusPipe],
  templateUrl: './avaliar-candidato.component.html',
  styleUrl: './avaliar-candidato.component.scss'
})
export class AvaliarCandidatoComponent {

 candidato: Candidato | null = null;
 idMonitoria: number = 0;
constructor(private professorService: ProfessorService,
            private toastrService: ToastrService
) {}

ngOnInit(): void {
  this.infoCandidato();
}

infoCandidato(){
  this.idMonitoria = history.state.idMonitoria;  
  const idCandidato = history.state.idCandidato;
  this.professorService.avaliarCandidato(this.idMonitoria, idCandidato).subscribe((result: Candidato)=>{
    this.candidato = result;
  })
}

baixarHistorico(idHistorico: number) {
  this.professorService.baixarHistorico(idHistorico).subscribe((result: Blob): void => {
    const file = new Blob([result], {type: 'application/pdf'});
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  });
}

aprovarCandidatura(idCandidato: number, idMonitoria: number){
    this.professorService.aprovarCandidatura(idCandidato, idMonitoria).subscribe({
      next: () => {this.toastrService.success("Candidatura aprovada com sucesso!"),
                   this.infoCandidato();
      }
    })
}

recusarCandidatura(idCandidato: number, idMonitoria: number){
    this.professorService.recusarCandidatura(idCandidato, idMonitoria).subscribe({
      next: () => {this.toastrService.success("Candidatura recusada com sucesso!"),
                   this.infoCandidato();
      }
    })
}


}
