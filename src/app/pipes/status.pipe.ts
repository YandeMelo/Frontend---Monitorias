import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  private statusMap: { [key: string]: string } = {
      "DISPONIVEL" : "Disponível",
      "ANDAMENTO" : "Andamento",
      "SUSPENSA" : "Suspensa",
      "FINALIZADA" : "Finalizada",
      "APROVADO" : "Aprovado",
      "CANCELADO" : "Cancelado",
      "AGUARDANDO_APROVACAO" : "Aguardando Aprovação",
      "RECUSADO" : "Recusado"
  };

  transform(status: string | undefined, args?: string): string {
    if (status) {
        return this.statusMap[status] || status;
    } else {
        return "";
    }
  }

}
