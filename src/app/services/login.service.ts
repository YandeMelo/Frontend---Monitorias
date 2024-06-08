import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.post<LoginResponse>("http://localhost:8080/auth/login", { email, password }, { headers }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token);
      })
    );
  }

  register(nome: string, cpf: string, curso:string, email: string, password: string, fotoPerfil: string, ativo: boolean, dataDesativacao: void, tipoUsuario: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.post<LoginResponse>("http://localhost:8080/auth/register", { nome, cpf, curso, email, password, fotoPerfil, ativo, dataDesativacao, tipoUsuario }, { headers })
  }
}
