import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UploadService } from '../../services/upload.service';
import { Router } from '@angular/router';

interface CustomForm {
  file: File
}

@Component({
  selector: 'app-alterar-imagem',
  standalone: true,
  imports: [],
  templateUrl: './alterar-imagem.component.html',
  styleUrl: './alterar-imagem.component.scss'
})
export class AlterarImagemComponent {

  constructor(public dialogRef: MatDialogRef<CustomForm>,
              private uploadService: UploadService,
              private router: Router
  ){}

  @Output() imagemNova = new EventEmitter<string>();

  arquivoAdicionado: boolean = false;

  file: File | undefined;
  imagemInput: string | undefined;

  onFilechange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagemInput = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  
  mudarFoto(){
    if (this.file){
      this.uploadService.alterarImagem(this.file).subscribe(result => {
        this.imagemNova.emit(this.imagemInput);
        this.dialogRef.close()
      })
    }
  }

}
