import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlterarImagemComponent } from '../../../components/alterar-imagem/alterar-imagem.component';
import { AlunoLayoutComponent } from '../../../components/aluno-layout/aluno-layout.component';
import { CursoPipe } from '../../../pipes/curso.pipe';
import { AlunoService } from '../../../services/aluno.service';
import { RedefinirSenhaComponent } from '../../../components/redefinir-senha/redefinir-senha.component';

export interface Aluno {
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
  selector: 'app-perfil-aluno',
  standalone: true,
  imports: [AlunoLayoutComponent, CursoPipe, DatePipe],
  templateUrl: './perfil-aluno.component.html',
  styleUrl: './perfil-aluno.component.scss'
})
export class PerfilAlunoComponent {

  aluno: Aluno | null = null;
  fotoPerfil: string = "";

  constructor(private alunoService: AlunoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.alunoService.getUser().subscribe(result => {
      this.aluno = result;
      this.fotoPerfil = this.aluno.fotoPerfil;
    })
  }

  public openDialogFoto() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(AlterarImagemComponent, {
      position: { right: '33%' }
    });
    dialogRef.componentInstance.imagemNova.subscribe((novaImagem: string) => {
      this.fotoPerfil = novaImagem;
    });
  }

  public openDialogSenha() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(RedefinirSenhaComponent, {
      position: { right: '33%' }
    });
  }

}