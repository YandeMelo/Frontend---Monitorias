import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface SenhaForm {
  senhaAtual: FormControl,
  novaSenha: FormControl
}

@Component({
  selector: 'app-redefinir-senha',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './redefinir-senha.component.html',
  styleUrl: './redefinir-senha.component.scss'
})
export class RedefinirSenhaComponent {

  senhaForm!: FormGroup<SenhaForm>;

  constructor(public dialogRef: MatDialogRef<SenhaForm>,
    private loginService: LoginService,
    private toastrService: ToastrService
  ) {
    this.senhaForm = new FormGroup({
      senhaAtual: new FormControl('', [Validators.required]),
      novaSenha: new FormControl('', [Validators.required]),
    })

  }

  redefinirSenha() {
    this.loginService.redefinirSenha(this.senhaForm.value.senhaAtual, this.senhaForm.value.novaSenha).subscribe({
      next: (response) => {
        this.toastrService.success("Senha alterada com sucesso!");
        this.dialogRef.close();
      },
      error: (error) => {
        this.toastrService.error("Senha atual incorreta!");
      }
    })
  }

  value: string = "";
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
