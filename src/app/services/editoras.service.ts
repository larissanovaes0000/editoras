import { Injectable } from '@angular/core';
import { Editora } from '../interfaces/editora';

@Injectable({
  providedIn: 'root'
})
export class CrudEditorasService {

  constructor() { }

  private key = 'editoras';

  getLocalStorageData(): any[] {
    const dados = localStorage.getItem(this.key)
    return dados ? JSON.parse(dados) : []
  }

  setLocalStorageData(data: any[]): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  obterEditoras(): Editora[] {
    return this.getLocalStorageData();
  }

  incluirEditora(editora: Editora) {
    const dados = this.getLocalStorageData();
    dados.push(editora);
    this.setLocalStorageData(dados);
  }

  excluirEditora(editora: Editora) {
    const dados = this.getLocalStorageData();
    const index = dados.findIndex((item) => item.id === editora.id);
    if (index !== -1) {
      dados.splice(index, 1);
      this.setLocalStorageData(dados);
    }
  }

  atualizarEditora(editora: Editora) {
    const dados = this.getLocalStorageData();
    const index = dados.findIndex((item) => item.id === editora.id);
    if (index !== -1) {
      dados[index] = editora;
      this.setLocalStorageData(dados);
    }
  }
}
