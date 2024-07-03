import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageableResponseMonitoria } from '../pages/professor/monitorias-abertas/monitorias-abertas.component';
import { PageableResponseProfessor } from '../pages/professor/consultar-candidatos/consultar-candidatos.component';
import { Monitoria } from '../pages/aluno/monitorias-disponiveis/monitorias-disponiveis.component';
import { Candidato } from '../pages/professor/avaliar-candidato/avaliar-candidato.component';


@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private apiUrl: string = "https://monitorias-api.onrender.com";

  constructor(private httpClient: HttpClient) { }

  abrirMonitoria(disciplina: string, semestre: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post(`${this.apiUrl}/monitorias/abrir`, {disciplina, semestre}, {headers});
  }

  monitoriasAbertas(page: number, size: number = 12): Observable<PageableResponseMonitoria> {
    return this.httpClient.get<PageableResponseMonitoria>(`${this.apiUrl}/professor/monitorias?page=${page}&size=${size}`);
  }

  consultarCandidatos(idMonitoria: number, page: number, size: number = 12): Observable<PageableResponseProfessor> {
    return this.httpClient.get<PageableResponseProfessor>(`${this.apiUrl}/professor/candidatos/${idMonitoria}?page=${page}&size=${size}`);
  }
  
  cancelarMonitoria(idMonitoria:number): Observable<Monitoria>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.put<Monitoria>(`${this.apiUrl}/monitorias/suspender/${idMonitoria}`, {headers});
  }
  
  avaliarCandidato(idMonitoria: number, idCandidato: number): Observable<Candidato>{
    return this.httpClient.get<Candidato>(`${this.apiUrl}/professor/avaliar/${idCandidato}/${idMonitoria}`);
  }
}
