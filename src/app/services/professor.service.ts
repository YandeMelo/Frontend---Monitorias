import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageableResponseMonitoria } from '../pages/professor/monitorias-abertas/monitorias-abertas.component';
import { PageableResponseProfessor } from '../pages/professor/consultar-candidatos/consultar-candidatos.component';


@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  apiUrl: string = "https://monitorias-api.onrender.com";

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

}
