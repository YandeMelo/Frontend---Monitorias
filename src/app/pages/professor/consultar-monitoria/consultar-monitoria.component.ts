import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../components/confirmation-dialog/confirmation-dialog.component';
import { ProfessorLayoutComponent } from '../../../components/professor-layout/professor-layout.component';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { StatusPipe } from '../../../pipes/status.pipe';
import { AlunoService } from '../../../services/aluno.service';
import { Monitoria } from '../../aluno/monitorias-disponiveis/monitorias-disponiveis.component';
import { Router } from '@angular/router';
import { ProfessorService } from '../../../services/professor.service';



@Component({
  selector: 'app-consultar-monitoria',
  standalone: true,
  imports: [ProfessorLayoutComponent, CursoPipe, StatusPipe, DatePipe, ConfirmationDialogComponent],
  templateUrl: './consultar-monitoria.component.html',
  styleUrl: './consultar-monitoria.component.scss'
})
export class ConsultarMonitoriaComponent {

  monitoria: Monitoria | null = null;
  
  constructor(
    private professorService: ProfessorService,
    private alunoService: AlunoService,
    private dialog: MatDialog,
    private router: Router
  ) {
    
  }
  
  ngOnInit(): void {
    const idMonitoria = history.state.idMonitoria;
    this.alunoService.infoMonitoria(idMonitoria).subscribe((res: Monitoria) => {
      this.monitoria = res;
    });
  }
  
  confirmDelete(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Tem certeza que deseja cancelar essa monitoria?",
      width: "350px",
      position: {left: '43.5%'}
    });
    
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result && this.monitoria?.id) {
        this.professorService.cancelarMonitoria(this.monitoria.id).subscribe((res: Monitoria)=>{
          this.monitoria = res;
        });
      }
    });
  }
  
  handleConsultarCandidatosRedirect(idMonitoria: number | undefined){
    this.router.navigate(['/professor/monitorias/candidatos'],  {state: {idMonitoria}});
  }
  
  
}
