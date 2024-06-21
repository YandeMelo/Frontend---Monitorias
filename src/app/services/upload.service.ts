import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) { }

  public candidatarAlunoMonitoria(file: File, monitoriaId: number) {
    const formData: FormData = new FormData();
    formData.append('historicoEscolar', file, file.name);
    return this.httpClient.post(`http://localhost:8080/monitorias/candidatar/${monitoriaId}`, formData);
  }

}
