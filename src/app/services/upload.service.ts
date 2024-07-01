import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  apiUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public candidatarAlunoMonitoria(file: File, monitoriaId: number) {
    const formData: FormData = new FormData();
    formData.append('historicoEscolar', file, file.name);
    return this.httpClient.post(`${this.apiUrl}/monitorias/candidatar/${monitoriaId}`, formData);
  }

}
