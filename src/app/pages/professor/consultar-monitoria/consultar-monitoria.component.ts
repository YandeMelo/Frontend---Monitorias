import { Component } from '@angular/core';
import { ProfessorLayoutComponent } from '../../../components/professor-layout/professor-layout.component';
import { Monitoria } from '../../aluno/monitorias-disponiveis/monitorias-disponiveis.component';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { StatusPipe } from '../../../pipes/status.pipe';
import { DatePipe } from '@angular/common';
import { AlunoService } from '../../../services/aluno.service';

@Component({
  selector: 'app-consultar-monitoria',
  standalone: true,
  imports: [ProfessorLayoutComponent, CursoPipe, StatusPipe, DatePipe],
  templateUrl: './consultar-monitoria.component.html',
  styleUrl: './consultar-monitoria.component.scss'
})
export class ConsultarMonitoriaComponent {

  monitoria: Monitoria | null = null;
  
  constructor(private alunoService: AlunoService) {
    
  }

  ngOnInit(): void {
    const idMonitoria = history.state.idMonitoria;
    this.alunoService.infoMonitoria(idMonitoria).subscribe((res: Monitoria) => {
      this.monitoria = res;
    });
  }

  confirmDelete(): void {
    if (window.confirm('Tem certeza que deseja deletar?')) {

    }
  }

}
