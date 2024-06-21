import { Component } from '@angular/core';
import { LoginInputComponent } from '../../../components/login-input/login-input.component';
import { LoginLayoutComponent } from '../../../components/login-layout/login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginLayoutComponent, LoginInputComponent, ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup<LoginForm>;
  constructor (
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {
        if (this.authService.hasRole(['ROLE_ALUNO'])) {
          this.router.navigate(['/aluno']);
        } else {
          this.router.navigate(['/professor']);
        } 
        this.toastrService.success("Login feito com sucesso!")
      },
      error: () => this.toastrService.error("Email ou Senha incorreto(a)!")
    });
  }
}
