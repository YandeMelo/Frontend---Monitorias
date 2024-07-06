import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorLayoutComponent } from '../../../components/professor-layout/professor-layout.component';

@Component({
  selector: 'app-home-professor',
  standalone: true,
  imports: [ProfessorLayoutComponent],
  templateUrl: './home-professor.component.html',
  styleUrl: './home-professor.component.scss'
})
export class HomeProfessorComponent {

}
