import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageableResponse } from '../pages/aluno/monitorias-disponiveis/monitorias-disponiveis.component';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient: HttpClient) { }

  getMonitorias(page: number, size: number = 12): Observable<PageableResponse> {
    return this.httpClient.get<PageableResponse>(`http://localhost:8080/monitorias/disponiveis?page=${page}&size=${size}`);
  }

}
