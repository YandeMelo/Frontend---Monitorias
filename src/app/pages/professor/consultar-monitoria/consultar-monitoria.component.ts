import { Component } from '@angular/core';
import { ProfessorLayoutComponent } from '../../../components/professor-layout/professor-layout.component';
import { Monitoria } from '../../aluno/monitorias-disponiveis/monitorias-disponiveis.component';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { StatusPipe } from '../../../pipes/status.pipe';
import { DatePipe } from '@angular/common';
import { AlunoService } from '../../../services/aluno.service';
import { ConfirmationDialogComponent } from '../../../components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-consultar-monitoria',
  standalone: true,
  imports: [ProfessorLayoutComponent, CursoPipe, StatusPipe, DatePipe, ConfirmationDialogComponent],
  templateUrl: './consultar-monitoria.component.html',
  styleUrl: './consultar-monitoria.component.scss'
})
export class ConsultarMonitoriaComponent {

  monitoria: Monitoria | null = null;
  
  constructor(private alunoService: AlunoService,
              private dialog: MatDialog
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
      data: "Tem certeza que deseja remover essa monitoria?",
      width: "350px",
      position: {left: '43.5%'}
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        console.log("Apagando monitoria...")
      }
    });
  }
  

}
