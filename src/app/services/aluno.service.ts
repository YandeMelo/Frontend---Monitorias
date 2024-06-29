import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Monitoria, PageableResponseAluno } from '../pages/aluno/monitorias-disponiveis/monitorias-disponiveis.component';
import { Candidatura } from '../pages/aluno/status-candidatura/status-candidatura.component';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient: HttpClient) { }

  getMonitorias(page: number, size: number = 12): Observable<PageableResponseAluno> {
    return this.httpClient.get<PageableResponseAluno>(`http://localhost:8080/monitorias/disponiveis?page=${page}&size=${size}`);
  }

  private monitoriaSalva = new BehaviorSubject<Monitoria | null>(null);
  monitoriaAtual = this.monitoriaSalva.asObservable();

  setInfoMonitoria(monitoria: Monitoria) {
    sessionStorage.setItem('monitoria', JSON.stringify(monitoria));
    this.monitoriaSalva.next(monitoria);
  }

  infoMonitoria() {
    const monitoria = sessionStorage.getItem('monitoria');
    this.monitoriaSalva.next(JSON.parse(monitoria || "") as Monitoria);
  }

  getCandidatura(): Observable<Candidatura>{
    return this.httpClient.get<Candidatura>(`http://localhost:8080/aluno/inscricao`);
  }
  
}
