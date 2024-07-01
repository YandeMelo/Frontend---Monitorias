import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Monitoria, PageableResponseAluno } from '../pages/aluno/monitorias-disponiveis/monitorias-disponiveis.component';
import { Candidatura } from '../pages/aluno/status-candidatura/status-candidatura.component';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  // apiUrl: string = "https://monitorias-api.onrender.com";
  apiUrl: string = "http://localhost:8080";

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

}
