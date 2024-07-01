import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageableResponseProfessor } from '../pages/professor/monitorias-abertas/monitorias-abertas.component';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  apiUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  abrirMonitoria(disciplina: string, semestre: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post(`${this.apiUrl}/monitorias/abrir`, {disciplina, semestre}, {headers});
  }

  monitoriasAbertas(page: number, size: number = 12): Observable<PageableResponseProfessor> {
    return this.httpClient.get<PageableResponseProfessor>(`${this.apiUrl}/professor/monitorias?page=${page}&size=${size}`);
  }
}
