import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monitoria, PageableResponseAluno } from '../pages/aluno/monitorias-disponiveis/monitorias-disponiveis.component';
import { Candidatura } from '../pages/aluno/status-candidatura/status-candidatura.component';
import { Aluno } from '../pages/aluno/perfil-aluno/perfil-aluno.component';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private apiUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getMonitorias(page: number, size: number = 12): Observable<PageableResponseAluno> {
    return this.httpClient.get<PageableResponseAluno>(`${this.apiUrl}/monitorias/disponiveis?page=${page}&size=${size}`);
  }

  infoMonitoria(idMonitoria: number): Observable<Monitoria> {
    return this.httpClient.get<Monitoria>(`${this.apiUrl}/monitorias/info/${idMonitoria}`);
  }

  getCandidatura(): Observable<Candidatura> {
    return this.httpClient.get<Candidatura>(`${this.apiUrl}/aluno/inscricao`);
  }

  baixarArquivo(idArquivo: number){
    return this.httpClient.get(`${this.apiUrl}/professor/historico/${idArquivo}`, {responseType: 'blob'});
  }

  getUser(){
    return this.httpClient.get<Aluno>(`${this.apiUrl}/aluno/user`);
  }
}
