import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curso',
  standalone: true
})
export class CursoPipe implements PipeTransform {

  private cursoMap: { [key: string]: string } = {
    "ENGENHARIA_DA_COMPUTACAO": "Engenharia da Computação",
    "ENGENHARIA_CIVIL": "Engenharia Civil",
    "ENGENHARIA_DE_CONTROLE_E_AUTOMACAO": "Engenharia de Controle e Automação",
    "ENGENHARIA_ELETRICA_ELETRONICA": "Engenharia Elétrica - Eletrônica",
    "ENGENHARIA_ELETRICA_ELETROTECNICA": "Engenharia Elétrica - Eletrotécnica",
    "ENGENHARIA_ELETRICA_TELECOMUNICACAO": "Engenharia Elétrica - Telecomunicação",
    "ENGENHARIA_MECANICA": "Engenharia Mecânica",
    "FISICA_DE_MATERIAIS": "Física de Materiais"
  };

  transform(curso: string | undefined, args?: string): string {
    if (curso) {
        return this.cursoMap[curso] || curso;
    } else {
        return "";
    }
  }
}