import { Component } from '@angular/core';
import { ProfessorLayoutComponent } from '../../../components/professor-layout/professor-layout.component';
import { ProfessorService } from '../../../services/professor.service';
import { MatDialog } from '@angular/material/dialog';
import { AlterarImagemComponent } from '../../../components/alterar-imagem/alterar-imagem.component';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { DatePipe } from '@angular/common';

export interface Professor {
  id: string,
  nome: string,
  curso: string,
  cpf: string,
  email: string,
  fotoPerfil: string,
  ativo: true,
  dataCadastro: string,
  ultimaAtualizacao: string
}

@Component({
  selector: 'app-perfil-professor',
  standalone: true,
  imports: [ProfessorLayoutComponent, CursoPipe, DatePipe],
  templateUrl: './perfil-professor.component.html',
  styleUrl: './perfil-professor.component.scss'
})
export class PerfilProfessorComponent {

  professor: Professor | null = null;
  fotoPerfil: string = "";

  constructor(private professorService: ProfessorService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.professorService.getUser().subscribe(result => {
      this.professor = result;
      this.fotoPerfil = this.professor.fotoPerfil;
    })
  }

  public openDialog() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(AlterarImagemComponent, {
      position: { right: '33%' }
    });
    dialogRef.componentInstance.imagemNova.subscribe((novaImagem: string) => {
      this.fotoPerfil = novaImagem;
    });
  }

}