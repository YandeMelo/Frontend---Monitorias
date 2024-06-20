import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Monitoria, PageableResponse } from '../pages/aluno/monitorias-disponiveis/monitorias-disponiveis.component';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient: HttpClient) { }

  getMonitorias(page: number, size: number = 12): Observable<PageableResponse> {
    return this.httpClient.get<PageableResponse>(`http://localhost:8080/monitorias/disponiveis?page=${page}&size=${size}`);
  }

  private monitoriaSalva = new BehaviorSubject<Monitoria | null>(null);
  monitoriaAtual = this.monitoriaSalva.asObservable();

  setInfoMonitoria(monitoria: Monitoria) {
    sessionStorage.setItem('monitoria', JSON.stringify(monitoria));
    this.monitoriaSalva.next(monitoria);
  }

  infoMonitoria() {
    const teste = sessionStorage.getItem('monitoria');
    this.monitoriaSalva.next(JSON.parse(teste || "") as Monitoria);
  }
  
}
