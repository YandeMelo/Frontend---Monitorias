import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbrirMonitoriaInputComponent } from '../../../components/abrir-monitoria-input/abrir-monitoria-input.component';
import { ProfessorService } from '../../../services/professor.service';
import { ToastrService } from 'ngx-toastr';
import { ProfessorLayoutComponent } from '../../../components/professor-layout/professor-layout.component';

interface AbrirForm {
  disciplina: FormControl,
  semestre: FormControl;
}

@Component({
  selector: 'app-abrir-monitoria',
  standalone: true,
  imports: [ProfessorLayoutComponent, AbrirMonitoriaInputComponent, ReactiveFormsModule],
  templateUrl: './abrir-monitoria.component.html',
  styleUrl: './abrir-monitoria.component.scss'
})
export class AbrirMonitoriaComponent {
  abrirMonitoriaForm!: FormGroup<AbrirForm>;

  constructor(private router: Router,
              private professorService: ProfessorService,
              private toastrService: ToastrService
  ) {
    this.abrirMonitoriaForm = new FormGroup({
      disciplina: new FormControl('', [Validators.required]),
      semestre: new FormControl('', [Validators.required, Validators.maxLength(6)])
    })
  }

  abrirMonitoria(){
    this.professorService.abrirMonitoria(
        this.abrirMonitoriaForm.value.disciplina,
        this.abrirMonitoriaForm.value.semestre,
    ).subscribe({
        next: () => {
            this.toastrService.success("Monitoria aberta com sucesso!"),
            this.router.navigate(['/professor']);
        },
        error: () => this.toastrService.error("Erro ao abrir monitoria.")
    })
  }

}
