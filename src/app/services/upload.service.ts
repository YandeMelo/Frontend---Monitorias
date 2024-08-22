import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  // private apiUrl: string = "https://monitorias-api.onrender.com";
  private apiUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public candidatarAlunoMonitoria(file: File, monitoriaId: number) {
    const formData: FormData = new FormData();
    formData.append('historicoEscolar', file, file.name);
    return this.httpClient.post(`${this.apiUrl}/monitorias/candidatar/${monitoriaId}`, formData);
  }
  
  public adicionarRelatorio(relatorio: File){
    const formData: FormData = new FormData();
    formData.append('relatorio', relatorio, relatorio.name);
    return this.httpClient.post(`${this.apiUrl}/aluno/adicionarRelatorio`, formData);
  }

  public alterarRelatorio(relatorio: File, idAluno: number, idArquivo: number, idMonitoria: number){
    const formData: FormData = new FormData();
    formData.append('relatorio', relatorio, relatorio.name);
    return this.httpClient.put(`${this.apiUrl}/professor/alterarRelatorio/${idAluno}/${idArquivo}/${idMonitoria}`, formData);
  }

}
