import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginInputComponent } from '../../../components/login-input/login-input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginLayoutComponent } from "../../../components/login-layout/login-layout.component";
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { LoginSelectComponent } from '../../../components/login-select/login-select.component';
import { ToastrService } from 'ngx-toastr';

interface RegisterForm {
  nome: FormControl,
  cpf: FormControl,
  curso: FormControl,
  email: FormControl,
  password: FormControl,
  fotoPerfil: FormControl,
  ativo: FormControl,
  dataDesativacao: FormControl,
  tipoUsuario: FormControl
}

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [LoginComponent, LoginInputComponent, ReactiveFormsModule, LoginLayoutComponent, LoginSelectComponent]
})
export class RegisterComponent {
  registerForm!: FormGroup<RegisterForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastrService: ToastrService  ){
    this.registerForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
      curso: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      fotoPerfil: new FormControl('', []),
      ativo: new FormControl(true, []),
      dataDesativacao: new FormControl(null, []),
      tipoUsuario: new FormControl('ALUNO', []),
    })
  }

  submit(){
    this.loginService.register(
        this.registerForm.value.nome, 
        this.registerForm.value.cpf, 
        this.registerForm.value.curso, 
        this.registerForm.value.email, 
        this.registerForm.value.password,
        this.registerForm.value.fotoPerfil,
        this.registerForm.value.ativo,
        this.registerForm.value.dataDesativacao,
        this.registerForm.value.tipoUsuario,
      ).subscribe({
      next: () => {this.router.navigate(["/login"])
                  this.toastrService.success("Cadastro realizado com sucesso!")
      },
                  
      error: () => this.toastrService.error("Não foi possível realizar o cadastro!")
      
    })
  }
  
}
