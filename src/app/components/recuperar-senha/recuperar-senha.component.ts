import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';

interface CodigoForm {
  email: FormControl
  codigoRecuperacaoSenha: FormControl,
  novaSenha: FormControl,
  confirmarSenha: FormControl
}

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.scss'
})
export class RecuperarSenhaComponent {
  
  codigoGerado: boolean = false;
  codigoVerificado: boolean = false;

  codigoForm!: FormGroup<CodigoForm>;

  value: string = "";

  constructor(public dialogRef: MatDialogRef<CodigoForm>,
    private loginService: LoginService
  ) {
    this.codigoForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      codigoRecuperacaoSenha: new FormControl('', [Validators.required]),
      novaSenha: new FormControl('', [Validators.required]),
      confirmarSenha: new FormControl('', [Validators.required]),
    })

  }

  gerarCodigo() {
    this.loginService.gerarCodigo(this.codigoForm.value.email).subscribe(result => {

    });
    this.codigoGerado = true;
  
  }

  verificarCodigo(){
    this.loginService.verificarCodigo(this.codigoForm.value.email, this.codigoForm.value.codigoRecuperacaoSenha).subscribe(result => {
      if (result) {
        this.codigoVerificado = true;
      }
    });
  }

  alterarSenha(){
    if (this.codigoForm.value.novaSenha === this.codigoForm.value.confirmarSenha) {
      this.loginService.alterarSenha(this.codigoForm.value.email, this.codigoForm.value.codigoRecuperacaoSenha, this.codigoForm.value.novaSenha).subscribe(result => {

      })
      this.dialogRef.close();
    }
  }

  onChange: any = () => { }
  onTouched: any = () => { }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void { }
}
