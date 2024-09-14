import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../types/login-response.type';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/auth/login`, { email, password }, { headers }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token);
      })
    );
  }

  register(nome: string, cpf: string, curso:string, email: string, password: string, fotoPerfil: string, ativo: boolean, dataDesativacao: void, tipoUsuario: string){
    if (!fotoPerfil) {
      fotoPerfil = "https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png";
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/auth/register`, { nome, cpf, curso, email, password, fotoPerfil, ativo, dataDesativacao, tipoUsuario }, { headers })
  }
  
  gerarCodigo(email: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post(`${this.apiUrl}/recuperar/codigo?email=${email}`, {headers}, { responseType: 'text' });
  }

  verificarCodigo(email: string, codigoRecuperacaoSenha: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post(`${this.apiUrl}/recuperar/verificar`, {email, codigoRecuperacaoSenha} , {headers});
  }

  alterarSenha(email: string, codigoRecuperacaoSenha: string, password: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post(`${this.apiUrl}/recuperar/alterarSenha`, {email, codigoRecuperacaoSenha, password} , {headers, responseType: 'text'});
  }

  redefinirSenha(senhaAtual: string, novaSenha: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post(`${this.apiUrl}/recuperar/redefinirSenha`, {senhaAtual, novaSenha} , {headers, responseType: 'text'});
  }


}
