import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoLayoutComponent } from '../../../components/aluno-layout/aluno-layout.component';

@Component({
  selector: 'app-home-aluno',
  standalone: true,
  imports: [AlunoLayoutComponent],
  templateUrl: './home-aluno.component.html',
  styleUrl: './home-aluno.component.scss'
})
export class HomeAlunoComponent {

}
